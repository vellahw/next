'use client';

import style from '../../styles/css/mobileFloatBtn.module.css';
import Button from './Button';

function MobileFloatButton() {
    const openQr = () => {
        alert("QR");
    }

    return(
        <div className={style.ButtonWrapper}>
            <div className={style.ButtonContainer}>
                <Button className={style.floatBtn} title={'지금 시작하기'} onClick={openQr} />
            </div>
        </div>
    )
}

export default MobileFloatButton;