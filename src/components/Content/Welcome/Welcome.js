import React, { Component } from 'react';
import SideBackground from '../../../components/UI/SideBackground/SideBackground';
import Background from '../../../components/UI/Background/Background';
import Logo from '../../../components/UI/Logo/Logo';
import Card from '../../../components/UI/Card/Card';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    render() {
        return (
            <div>
                <Background classBG={"bg-theme"} />
                <div className="site-content">
                    <Logo />
                    <Card>
                        <div className="container-content">
                            <p>Halo, Selamat datang di <strong className="color-primary">PermataBank</strong></p>
                            <p>Silakan menekan tombol <strong>Lanjut</strong> untuk menyelesaikan Transfer</p>
                            <div className="wrapper-button">
                                <Link to="/resendcode" className="button button-primary">Lanjut</Link>
                            </div>
                        </div>
                        <SideBackground />
                    </Card>
                </div>
            </div>

        )
    }
}

export default Welcome
