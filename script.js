document.addEventListener('DOMContentLoaded', () => {

    const mainContent = document.querySelector('main');
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    const pageContentMap = {
        'index.html': { 
            title: 'Vozes do Desenvolvimento', 
            html: document.getElementById('somos').outerHTML + document.getElementById('informacao').outerHTML + document.getElementById('contato').outerHTML 
        },
        'projeto.html': { 
            title: 'Projeto | Vozes do Desenvolvimento', 
            html: document.getElementById('somos').outerHTML + document.getElementById('informacao').outerHTML + document.getElementById('contato').outerHTML 
        },
        'cadastro.html': { 
            title: 'Cadastro | Vozes do Desenvolvimento', 
            html: '<section><h2>Formulário de Cadastro de Voluntários</h2><form action="" id="form-cadastro"><fieldset><legend>Dados Pessoais</legend><label for="nome">Nome Completo:</label><input type="text" id="nome" name="nome" required /><br /><label for="email">E-mail:</label><input type="email" id="email-cadastro" name="email" required /><br /><label for="cpf">CPF:</label><input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" /><br /><label for="telefone">Telefone:</label><input type="text" id="telefone-cadastro" name="telefone" placeholder="(00) 00000-0000"/><br /><label for="datanasc">Data de Nascimento:</label><input type="date" id="datanasc" name="datanasc" /><br /><label for="cep">CEP:</label><input type="text" id="cep" name="cep" placeholder="00000-000" /><br /><label for="endereco">Endereço:</label><input type="text" id="endereco" name="endereco" required /><br /><label for="cidade">Cidade:</label><input type="text" id="cidade" name="cidade" required /><label for="estado">Estado:</label><select id="estado" name="estado" required><option value="" disabled selected>Escolha Estado (UF)</option><option value="AC">Acre</option><option value="SP">São Paulo</option></select><button type="submit" class="btn-enviar">Enviar</button></fieldset></form></section>' // Versão 
        },
        'doar.html': {
            title: 'Doar | Vozes do Desenvolvimento',
              html: '<section class="container"><h1>Seu apoio impulsiona o Empreendedorismo Social!</h1><p class="impact-message">Cada doação se transforma em capacitação...</p><form class="donation-form" id="form-doacao" action="/processar-doacao" method="POST"><h2>1. Escolha o valor da sua doação</h2><div class="donation-options"><button type="button" data-amount="35">R$ 35</button><button type="button" data-amount="70">R$ 70</button><button type="button" data-amount="100" class="selected">R$ 100</button><button type="button" data-amount="150">R$ 150</button></div><label for="outros-valores">Ou defina outro valor (R$):</label><input type="number" id="outros-valores" name="valor_doacao" placeholder="Ex: 50" required min="10"><label for="frequencia">2. Frequência da Doação</label><select id="frequencia" name="frequencia" required><option value="unica">Doação Única</option><option value="mensal">Doação Mensal (Recorrente)</option></select><h2>3. Seus Dados (Opcional)</h2><label for="nome">Nome Completo:</label><input type="text" id="nome-doacao" name="nome" placeholder="Seu nome (para fins de relatório de Transparência)"><label for="email">E-mail:</label><input type="email" id="email-doacao" name="email" placeholder="Seu e-mail"><div class="transparency"><p>Nós valorizamos a **Transparência**...</p></div><button type="submit">Doar Agora e Transformar Vidas</button></form><div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;"><p>Quer ajudar de outra forma? Conheça também as opções de **Voluntariado** e **Parcerias Empresariais**.</p><a href="cadastro.html" class="btn-voluntario">Quero ser Voluntário</a></div></section>' // Versão 
        },
        'parceiros.html': { 
            title: 'Parceiros | Vozes do Desenvolvimento', 
            html: document.querySelector('#parceiros section.container').outerHTML
        }
    };
    
    const loadContent = (path) => {
        const content = pageContentMap[path];
        if (content) {
            mainContent.innerHTML = content.html;
            document.title = content.title;
            history.pushState(null, content.title, path);
            bindDynamicEvents(); 
            updateActiveLink(path);
        } else {
            mainContent.innerHTML = '<h2>Página não encontrada!</h2>';
            document.title = 'Erro | Vozes do Desenvolvimento';
        }
    };

    const updateActiveLink = (path) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === path) {
                link.classList.add('active');
            }
        });
    };

    const bindDynamicEvents = () => {
        const formContato = document.querySelector('#contato form');
        if (formContato) {
            formContato.addEventListener('submit', validateContatoForm);
        }

        const formCadastro = document.querySelector('#form-cadastro');
        if (formCadastro) {
            formCadastro.addEventListener('submit', validateCadastroForm);
        }

        const formDoacao = document.querySelector('#form-doacao');
        if (formDoacao) {
            formDoacao.addEventListener('submit', handleDonation);
            document.querySelectorAll('.donation-options button').forEach(button => {
                button.addEventListener('click', (e) => {
                    document.querySelectorAll('.donation-options button').forEach(btn => btn.classList.remove('selected'));
                    e.target.classList.add('selected');
                    document.getElementById('outros-valores').value = e.target.getAttribute('data-amount');
                });
            });
        }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const path = e.target.getAttribute('href');
            if (pageContentMap[path]) {
                e.preventDefault(); 
                loadContent(path);
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-voluntario')) {
            e.preventDefault();
            loadContent('cadastro.html');
        }
    });

    const initialPath = window.location.pathname.split('/').pop() || 'index.html';
    if (initialPath === 'index.html' || initialPath === '') {
        bindDynamicEvents();
        updateActiveLink('index.html');
    } else {
        updateActiveLink(initialPath);
    }

    function validateContatoForm(e) {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value.trim();
        let isValid = true;
        let errorMessage = '';

        if (nome.length < 3) {
            isValid = false;
            errorMessage += '• Nome precisa ter pelo menos 3 caracteres.\n';
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            isValid = false;
            errorMessage += '• E-mail inválido.\n';
        }
        
        if (assunto === '' || assunto === 'Escolha o Assunto') {
            isValid = false;
            errorMessage += '• Por favor, selecione um assunto.\n';
        }

        if (mensagem.length < 10) {
            isValid = false;
            errorMessage += '• Mensagem muito curta. Mínimo de 10 caracteres.\n';
        }

        if (!isValid) {
            e.preventDefault();
            alert('Erro no Formulário de Contato:\n' + errorMessage);
        } else {
            e.preventDefault(); 
            alert('Mensagem enviada com sucesso! (Simulação)');
            e.target.reset();
        }
    }

    function validateCadastroForm(e) {
        e.preventDefault(); 
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const cpf = document.getElementById('cpf').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const datanasc = document.getElementById('datanasc').value.trim();
        let isValid = true;
        let errorMessage = '';

        const cpfPattern = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

        if (nome.length < 3) {
            isValid = false;
            errorMessage += '• Nome Completo inválido.\n';
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            isValid = false;
            errorMessage += '• E-mail inválido.\n';
        }

        if (cpf && !cpfPattern.test(cpf)) {
            isValid = false;
            errorMessage += '• Formato de CPF inválido (ex: 000.000.000-00).\n';
        }

        if (!isValid) {
            alert('Erro no Formulário de Cadastro:\n' + errorMessage);
        } else {
            alert(`Cadastro de Voluntário de ${nome} realizado com sucesso! (Simulação)`);
            e.target.reset();
        }
    }

    function handleDonation(e) {
        e.preventDefault(); 
        const form = e.target;
        const valor = document.getElementById('outros-valores').value;
        const frequencia = document.getElementById('frequencia').value;
        const nome = document.getElementById('nome-doacao').value.trim() || 'Anônimo';
        const email = document.getElementById('email-doacao').value.trim() || 'Não Informado';

        if (parseFloat(valor) < 10) {
            alert('O valor mínimo de doação é R$ 10.');
            return;
        }

        const donationData = {
            id: Date.now(),
            valor: parseFloat(valor).toFixed(2),
            frequencia: frequencia,
            nome: nome,
            email: email,
            data: new Date().toLocaleString('pt-BR')
        };

        let donations = JSON.parse(localStorage.getItem('vozes_doacoes')) || [];
        donations.push(donationData);
        localStorage.setItem('vozes_doacoes', JSON.stringify(donations));

        alert(`Doação de R$ ${donationData.valor} (${frequencia}) registrada! Obrigado, ${nome}! (Dados armazenados localmente)`);
        form.reset();
        console.log('Doações registradas (localStorage):', donations);
    }
});