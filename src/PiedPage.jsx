import './PiedPage.scss';

export default function PiedPage() {
    return (
        <footer className="PiedPage">
            &copy;{new Date().getFullYear()} - TIM Maisonneuve - Tous droits réservés
        </footer>
    );
}