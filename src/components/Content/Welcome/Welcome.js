import React, { Component } from 'react';
import SideBackground from '../../../components/UI/SideBackground/SideBackground';
import Background from '../../../components/UI/Background/Background';
import Logo from '../../../components/UI/Logo/Logo';
import Card from '../../../components/UI/Card/Card';

class Welcome extends Component {
    render() {
        return (
            <div>
                <Background />
                <div className="site-content">
                    <Logo />
                    <Card>
                        <div class="container-content">
                            <p>Halo, Selamat datang di <strong class="color-primary">PermataBank</strong></p>
                            <p>Silakan menekan tombol <strong>Lanjut</strong> untuk menyelesaikan Transfer</p>
                            <div class="wrapper-button">
                                <a href="resend-code.html" class="button button-primary">Lanjut</a>
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
