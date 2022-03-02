import './Produit.scss';
import BoutonAjoutPanier from './BoutonAjoutPanier';

// Il est aussi possible de déstructurer un array directement dans les paramètres grâce à :
export default function Produit({etatPanier : [panier, setPanier], nom, prix, pid}) {
    let quantite = panier[pid] ? panier[pid].quantite : 0;

    function ajouterAuPanier() {
        // S'il y en a déjà, on l'augmente
        if (panier[pid]) {
            panier[pid].quantite++;
        }
        // Sinon, on le crée
        else {
            panier[pid] = {
                prix: prix,
                quantite: 1
            };
        }

        // Notifier React que le panier a changé
        /* 
            Il faut cloner l'objet panier pour que React détecte que le panier a été changé,
            plutôt que de le modifier 
        */
        setPanier(...panier);
    }

    return (
        <article className="Produit">
            <img src={"images-produits/" + pid + ".jpeg"} alt="{nom}"/>
            <div className="titre">{nom}</div>
            <div className="prix">{prix}</div>
            <BoutonAjoutPanier quantite={quantite} onClick={ajouterAuPanier}/>
        </article>
    );
}