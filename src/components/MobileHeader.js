import Image from "../assets/MobileClothes.png";

function MobileHeader() {
  return (
    <div className="mobileHome__header">
        <div className="mobileHome__header__circle">
            <img src={Image} alt="Clothes" className="mobileHome__header__circle__image"/>
        </div>
    </div>
  );
}

export default MobileHeader;
