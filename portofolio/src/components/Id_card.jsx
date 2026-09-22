import { icons } from '../assets/icons';
import { profile } from '../const/profile';

export default function ProfileCard() {
  return (
    <figure className="profile-card" data-profile-photo>
      <div className="character-bar"><span>CHARACTER PROFILE</span><span aria-hidden="true">✦</span></div>
      <img src={icons.ina} alt="Syabina Nur Pajriyanti" fetchPriority="high" />
      <figcaption>
        <strong>{profile.name}</strong>
        <span>Curriculum Developer & AI Trainer</span>
        <span className="character-location">⌖ {profile.location}</span>
      </figcaption>
    </figure>
  );
}
