import type { APIRoute } from 'astro';
import jwt from 'jsonwebtoken';

// Mot de passe administrateur (en production, stockez cela dans une variable d'environnement)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin2024';
const JWT_SECRET = process.env.JWT_SECRET || 'voglans-admin-secret-2024';

interface AuthRequest {
  password: string;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body: AuthRequest = await request.json();
    const { password } = body;

    console.log('Tentative de connexion admin');

    if (!password) {
      return new Response(JSON.stringify({
        error: 'Mot de passe requis'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Vérifier le mot de passe
    if (password !== ADMIN_PASSWORD) {
      console.log('Mot de passe incorrect');
      return new Response(JSON.stringify({
        error: 'Mot de passe incorrect'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Générer un token JWT
    const token = jwt.sign(
      {
        admin: true,
        timestamp: Date.now()
      },
      JWT_SECRET,
      { expiresIn: '8h' } // Token valide 8 heures
    );

    console.log('Connexion admin réussie');

    return new Response(JSON.stringify({
      success: true,
      token,
      message: 'Connexion réussie',
      expiresIn: '8h'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erreur lors de l\'authentification:', error);
    return new Response(JSON.stringify({
      error: 'Erreur serveur'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// Endpoint pour vérifier l'authentification
export const GET: APIRoute = async ({ request }) => {
  try {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response(JSON.stringify({
        authenticated: false,
        error: 'Token manquant'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const token = authHeader.substring(7);

    try {
      // Vérifier le token
      const decoded = jwt.verify(token, JWT_SECRET) as any;

      if (!decoded.admin) {
        return new Response(JSON.stringify({
          authenticated: false,
          error: 'Token invalide'
        }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      return new Response(JSON.stringify({
        authenticated: true,
        admin: true,
        expiresAt: decoded.exp
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });

    } catch (jwtError) {
      return new Response(JSON.stringify({
        authenticated: false,
        error: 'Token expiré ou invalide'
      }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    console.error('Erreur lors de la vérification:', error);
    return new Response(JSON.stringify({
      authenticated: false,
      error: 'Erreur serveur'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
