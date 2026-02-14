var InvestimentoSimular = {
    
    /**
     * Comportamento chamado ao clicar na flag "Simular"
     */
    onClickSimular: function() {
        fetch('http://localhost:8080/investimento/calcular', {
            method: 'get',
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then();
    }
}

export default InvestimentoSimular;