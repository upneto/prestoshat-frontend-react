
import './Home.css';

import { NavbarApp } from '../../components/navbar/NavbarApp';
import { Col, Container, Row, Image, Tabs, Tab, Stack, Badge, Button } from 'react-bootstrap';
import ProfileTab from './tabs/profile/ProfileTab';
import GamesTab from './tabs/games/GamesTab';
import RatingTab from './tabs/rating/RatingTab';
import StatisticTab from './tabs/statistic/StatisticTab';

export const Home = () => {
    return (        
        <section>
            <NavbarApp />

            <Container>
                <Row className='row' >
                    <Col md="auto" lg="3" >
                        <center>
                            <Image className='avatar' src="./static/images/eu.jpeg" roundedCircle />
                        </center>
                    </Col>
                    
                    <Col md="auto" lg="5" className='name-text' >                        
                        <h1>Ulisses Pereira da Silva Neto</h1>                        
                    </Col>

                    <Col md="auto" lg="4" className='name-text' >
                        <div className="d-grid gap-2">
                            <Button variant="outline-warning" className='level' size="lg" >
                                Jogador Nível <Badge bg="dark">99</Badge>
                                <span className="visually-hidden">Nível do jogador</span>
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Row className='row' >
                    <Stack direction="horizontal" gap={3}>
                        <Badge bg="primary">Jogando: 9999</Badge>
                        <Badge bg="success">Finalizados: 9999</Badge>
                        <Badge bg="danger">Abandonados: 9999</Badge>                                
                    </Stack>
                </Row>

                <Row className='row' >
                    <Tabs defaultActiveKey='perfil' id='abasHome' className="mb-3" fill >
                        <Tab eventKey="perfil" title="Perfil">
                            <ProfileTab />
                        </Tab>
                        <Tab eventKey="jogos" title="Jogos">
                            <GamesTab />    
                        </Tab>                                
                        <Tab eventKey="avaliacoes" title="Avaliações">
                            <RatingTab />
                        </Tab>
                        <Tab eventKey="estatisticas" title="Estatisticas">
                            <StatisticTab />
                        </Tab>
                    </Tabs>
                </Row>
            </Container>

        </section>
    );
};

export default Home;