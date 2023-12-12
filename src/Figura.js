// Figura.js
import React from 'react';

class Figura extends React.Component {
    handleClick = () => {
        alert(this.props.title);
    };

    render() {
        return (
            <div style={styles.card}>
                <img src={this.props.image} alt={this.props.title} style={styles.image} />
                <div style={styles.content}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    <button onClick={this.handleClick}>Mostrar Título</button>
                </div>
            </div>
        );
    }
}

const styles = {
    card: {
        flex: '1',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '10px',
    },
    content: {
        textAlign: 'left',
    },
};

export default Figura;
