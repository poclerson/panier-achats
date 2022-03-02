import './BoutonAjoutPanier.scss';
import Badge from '@mui/material/Badge';

export default function BoutonAjoutPanier(props){
    return (
        <Badge badgeContent={props.quantite} color="secondary">
            <button onClick={props.onClick} className="BoutonAjoutPanier">Ajouter au panier</button>
        </Badge>
    );
}