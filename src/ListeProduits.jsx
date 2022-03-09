import './ListeProduits.scss';
import Produit from './Produit';
import { useState, useEffect } from 'react';
import { bdFirestore as bd } from './firebase/init';
import { collection, getDocs } from 'firebase/firestore';

export default function ListeProduits({etatPanier}) {
    // Variable d'état des produits
    const [produits, setProduits] = useState([]);

    // Obtenir les produits de la collection Firestore
    useEffect(function() {
        // Obtenir tous les documents de la collection 'magasin-general-produits'
        getDocs(collection(bd, 'magasin-general-produits')).then(
            qs => setProduits(qs.docs.map(doc => ({id: doc.id, ...doc.data()})))
        );
    }, []);

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