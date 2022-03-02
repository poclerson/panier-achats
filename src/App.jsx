import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import Accueil from './Accueil';
import Histoire from './Histoire';
import {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';

export default function App() {
	/**
	 * Opérateur ||
	 * Retourne la première valeur si elle est vraie
	 * Retourne la deuxième valeur si la première est fausse
	*/
	const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});

	/*
		Étant donné que useState() retourne un tableau de deux éléments,
		on peut définir à la déclaration de variables, deux variables plutôt
		qu'une

		On appelle cette technique JavaScript la déstructuration de tableau
	*/
	// const [compteur, setCompteur] = useState(0);
	const panier = etatPanier[0];

	// Sauvegarder le panier dans localStorage
	// Utiliser le HOOK useEffect pour éxecuter ce code de façon contrôlée
	useEffect(() => window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier]);

    return (
		<div className="App">
			<Entete panier={panier}/>
			<Routes>
				<Route path="/" element={<Accueil />} />
				<Route path="/notre-histoire" element={<Histoire />} />
				<Route path="/nos-produits" element={<ListeProduits etatPanier={etatPanier}/>} />
			</Routes>
			<PiedPage />
		</div>
    );
}
