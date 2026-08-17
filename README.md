# Hunter Recursos Humanos Inteligentes 🚀

Landing page institucional e plataforma interativa de diagnóstico da **Hunter Recursos Humanos Inteligentes**, especializada em **RH por Competência**, combate ao turnover e implantação completa de todos os subsistemas de RH.

---

## 🌟 Funcionalidades Principais

- **Engenharia de Subsistemas de RH**: Catálogo completo dos 6 subsistemas com detalhamento de escopo, entregáveis e impacto no combate ao turnover.
- **Simulador Financeiro de Custo de Turnover**: Calculadora interativa calibrada com parâmetros SHRM para estimar perdas com rotatividade e a economia anual proporcionada pela consultoria Hunter.
- **Diagnóstico de Maturidade em RH**: Quiz interativo para avaliar o estágio de maturidade da gestão de pessoas da empresa e recomendar subsistemas prioritários.
- **Metodologia em 4 Fases**: Apresentação da esteira de implantação da consultoria (Diagnóstico, Modelagem, Implantação e Monitoramento).
- **Formulário de Contato e Proposta Técnica**: Integração direta com disparo de e-mail e atalho direto para WhatsApp com mensagem estruturada.
- **Design Executivo de Alto Padrão**: Identidade visual em tons de ouro e preto, tipografia `Plus Jakarta Sans` & `Space Grotesk`, responsivo para mobile e desktop.

---

## 🛠️ Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite 6** (Build tool ultrarrápido)
- **Tailwind CSS v4** (Design System corporativo moderno)
- **Lucide React** (Ícones vetoriais profissionais)
- **FormSubmit API** (Despacho seguro de formulários)

---

## 💻 Como Rodar o Projeto Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU-USUARIO/hunter-rh-landing.git
cd hunter-rh-landing
```

### 2. Instalar as dependências
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse no seu navegador: `http://localhost:3000` (ou a porta indicada no terminal).

### 4. Gerar build de produção
```bash
npm run build
```
Os arquivos otimizados para produção serão gerados na pasta `dist/`.

---

## 🚀 Como Publicar no GitHub

1. Inicialize o repositório git localmente (caso ainda não esteja):
```bash
git init
git add .
git commit -m "feat: site institucional Hunter Recursos Humanos Inteligentes"
```

2. Crie um novo repositório no seu GitHub (ex: `hunter-rh-landing`).

3. Conecte o repositório remoto e faça o push:
```bash
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/hunter-rh-landing.git
git push -u origin main
```

---

## 🌐 Como Hospedar no Netlify

O projeto já inclui os arquivos de configuração necessários para o Netlify (`netlify.toml` e `public/_redirects`).

### Opção 1: Conexão Direta com o GitHub (Recomendado)
1. Acesse [Netlify](https://www.netlify.com/) e faça login.
2. Clique em **"Add new site"** > **"Import an existing project"**.
3. Selecione **GitHub** e escolha o repositório `hunter-rh-landing`.
4. As configurações de build serão identificadas automaticamente pelo `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Clique em **"Deploy site"**. Seu site estará no ar com HTTPS em menos de 1 minuto!

### Opção 2: Deploy Manual por Drag & Drop
1. Execute `npm run build` na sua máquina.
2. No painel do Netlify, vá em **"Sites"** e arraste a pasta `dist` gerada para a área de upload.

---

## 🏢 Identificação Corporativa

- **Agente / Razão Social**: Hunter Recursos Humanos Inteligentes
- **CNPJ**: 54.013.036/0001-39
- **Endereço**: Rua Alvares Cabral, Nº 106, Sala 504, Bairro Fabrício, Uberaba - MG, CEP: 38.065-240
- **Contato Comercial**: contato@hunterrh.com.br | (31) 99629-0458
