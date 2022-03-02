import './ListeProduits.scss';
import Produit from './Produit';
import produits from './data/produits.json';

export default function ListeProduits({etatPanier}) {
    /* 
        Méthode 1: programmation impérative avec une boucle for 
    */
    // let composantsProduits = [];

    // // Parcourir le tableau et créer un composant produit pour chaque élément
    // for (let i = 0; i < produits.length; i++) {
    //     produits.push(<Produit nom={produits[i].nom} prix={produits[i].prix} pid={produits[i].id}/>);
    // }



    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {
                    produits.map(produit => <Produit 
                        etatPanier={etatPanier}
                        key={produit.id} 
                        nom={produit.nom} 
                        prix={produit.prix} 
                        pid={produit.id}/>)
                }
            </div>
        </section>
    )
}