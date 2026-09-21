import { icons } from '../assets/icons';

export default function ProfileCard() {
  return (
    <figure className="profile-card">
      <img src={icons.ina} alt="Syabina Nur Pajriyanti" fetchPriority="high" />
      <figcaption>Syabina Nur Pajriyanti</figcaption>
    </figure>
  );
}
