import './Entete.scss';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Badge from '@mui/material/Badge';
import {NavLink} from 'react-router-dom';

// Déstructuration d'un objet
export default function Entete({panier, utilisateur, setUtilisateur}) {
    // Obtenir les cinq informations importantes pour le sommaire du panier 
    // Lors d'une déstructuration, on peut "renommer" des variables avec :
    const {articlesDifferents: ad, articlesTotaux, sousTotal, taxes, total} = calculerInfoPanier(Object.values(panier));

    return (
        <header className="Entete">
            <NavLink to="/" className={(lien) => lien.isActive ? "lien-actif" : ""}>
                <h1>Magasin général</h1>
            </NavLink>
            <input type="checkbox" id="checkbox-sommaire-panier"/>
            <nav className="nav-principale">
                {/* Si la propriété isActive est true, on met la classe lien-actif */}
                <NavLink to="/nos-produits" className={({isActive}) => isActive ? "lien-actif" : ""} >Produits</NavLink>
                <NavLink to="/notre-histoire" className={({isActive}) => isActive ? "lien-actif" : ""}>Notre histoire</NavLink>
            </nav>

            <div>{utilisateur.displayName}</div>
            <button>Déconnexion</button>

            <nav className="nav-secondaire">
                <div className="sommaire-panier">
                    <h3>Sommaire du panier</h3>
                    <div className="info">
                        <span>Articles différents</span>
                        <span>{ad}</span>
                    </div>
                    <div className="info">
                        <span>Articles totaux</span>
                        <span>{articlesTotaux}</span>
                    </div>
                    <div className="info">
                        <span>Sous-total</span>
                        <span>{sousTotal}</span>
                    </div>
                    <div className="info">
                        <span>Taxes</span>
                        <span>{taxes}</span>
                    </div>
                    <div className="info">
                        <span>Total</span>
                        <span>{total}</span>
                    </div>
                </div>
                <a href="#">
                    <Badge badgeContent={articlesTotaux} color="primary">
                        <label htmlFor="checkbox-sommaire-panier">
                            <ShoppingCartRoundedIcon />
                        </label>
                    </Badge>
                </a>
                <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}

/**
 * Calculer l'information sommaire du panier
 * Cette fonction peut être placée à l'extérieur du composant pour qu'elle n'ait pas besoin
 * de se faire charger à chaque interaction avec la page (avec React)
 * 
 * @param Object panier Objet panier d'achat
 * 
 * @returns Object Objet contenant les cinq informations requises du panier
 */

function calculerInfoPanier(panier) {
    const sousTotal = panier.reduce((acc, courant) => acc + courant.quantite * courant.prix, 0);
    const taxes = sousTotal * 0.14975;

    return { // objet javascript
        articlesDifferents: panier.length,
        articlesTotaux: panier.reduce((acc, courant) => acc + courant.quantite, 0),
        sousTotal: sousTotal.toFixed(2),
        taxes: taxes.toFixed(2),
        total: (sousTotal + taxes).toFixed(2)
    };
}