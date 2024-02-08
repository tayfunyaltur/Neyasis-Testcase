"use client";
import React from "react";
import classnames from "./footer.module.css";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    return (
        <div className={classnames.container}>
            {pathname === "/" && (
                <div className={classnames.column}>
                    <div>
                        <span>®2020 Finddeveloper.net</span>
                        <span>
                            <a href="#">Gizlilik Merkezi</a>
                            <a href="#">Çerezler</a>
                            <a href="#">Gizlilik</a>
                            <a href="#">Şartlar</a>
                        </span>
                    </div>
                    <div>
                        <img src="/assets/iskur-logo.jpg" alt="iskur logo" />
                        <span>
                            Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak
                            31/08/2018-30/08/2021 tarihleri arasında faaliyette
                            bulunmak üzere, Türkiye İş Kurumu tarafından
                            16.07.2018 tarih ve 26124 sayılı karar uyarınca 170
                            nolu belge ile faaliyet göstermektedir. 4904 sayılı
                            kanun uyarınca iş arayanlardan ücret alınmayacak ve
                            menfaat temin edilmeyecektir. Şikayetleriniz için
                            aşağıdaki telefon numaralarına başvurabilirsiniz.
                            Diğer iller için tıklayın. Türkiye İş Kurumu
                            İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye iş
                            Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet
                            Merkezi : 0216 523 90 26
                        </span>
                    </div>
                </div>
            )}
            {pathname !== "/" && <span>®2020 Finddeveloper.net</span>}
            <div className={classnames.column}>
                <span>
                    <a href="#">Gizlilik Merkezi</a>
                    <a href="#">Çerezler</a>
                    <a href="#">Gizlilik</a>
                </span>
            </div>
        </div>
    );
};

export default Footer;
