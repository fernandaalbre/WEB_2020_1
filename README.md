# WEB_2020_1
<h1 align="center"> ASP.NET Core Demo </h1>

## 📑 Sobre

**ASP.NET Core Demo** é um repositório usado para colocar em prática os conceitos básicos da *ASP.Net Core* criando a base para uma *Aplicação Web* e uma  *Web API*. 

---

## 🧠 Conceitos aprendidos

### ASP.NET vs ASP.NET core

A *ASP.NET* e a *ASP.NET core* são ambas tecnologias utilizadas para aplicações web da Microsoft, porém essas tecnologias tem suas diferenças o que pesa como aspecto positivo e negativo para o desenvolvedor.

Principais diferenças:

| ASP.NET                     | ASP.NET core                      |
|-----------------------------|-----------------------------------|
| Não Open Source             | Open Source                       |
| Suporte da Microsoft        | Suporte da Microsoft e comunidade |
| Windows                     | Windows, Linux e Mac OS           |
| Possui todos os componentes | Não possui todos os componentes   |
| Visual Studio               | Visual Studio Code e outras IDEs  |


Apesar da ASP.NET Core não possuir todos os componentes para a aplicação é possível instalar a parte fazendo uso de suporte e ferramentas de linha de comando como NET CLI, Yeoman entre outros.

**Lista de outras opções de desenvolvimento e recomendações:**

- **ASP .NET Web Forms** : Recomendado usar somente para manutenção.

- **ASP .NET MVC** : Recomendado usar para aplicações para plataforma Windows.
 
 - **ASP .NET Core** : Recomendado para desenvolvimento multiplataforma.

### Comandos SDK  e sdk-options

Comandos básciso aprendidos e utilizados na criação da Aplicação Web e da Web API


|Comandos SDK | Função                                                         |
|-------------|----------------------------------------------------------------|
| new         | Criar um novo projeto ou arquivo do .NET.                      |
| restore     | Restaurar as dependências especificadas em um projeto do .NET. |
| run         | Criar e executar uma saída de projeto do .NET.                 |

|sdv-options  | Função                                    |
|-------------|-------------------------------------------|
| -h|--help    |     Mostrar a ajuda da linha de comando. |
| --list-sdks | Exiba os SDKs instalados.                 |
| --version   | Exibir versão do SDK do .NET Core em uso. |

### Yeoman e NET CLI

*Yeoman* é um sistema para criação de templetes genéricos que permite a criação de qualquer tipo de aplicação. (Precisa do *Nodejs* e *NPM*).
*NET CLI* é uma interface de linha de comando, uma ferramenta multiplataforma para o desenvolvimento de aplicativos.

---

## ⚙️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [C#](https://docs.microsoft.com/pt-br/dotnet/csharp/)
- [.Net Core](https://github.com/dotnet/aspnetcore)
- [NPM](https://www.npmjs.com/)
- [Yeoman](https://yeoman.io/)
- [.NET CLI](https://docs.microsoft.com/pt-br/dotnet/core/tools/)

---

## ☄️ Como baixar o projeto

Pré-requisitos:

- [.NET Core 3.1 (v3.1.302)](https://dotnet.microsoft.com/download/dotnet-core/thank-you/sdk-3.1.302-windows-x64-installer)
- [SDK na versão (v1.1.14)](https://dotnet.microsoft.com/download/dotnet-core/1.0)

No promit command:

```bash

    # Clonar o repositório
    $ git clone https://github.com/fabianysousa/aspncore-demo

    # Entrar no diretório
    $ cd aspncore-demo
    
    # Entrar no diretório
    $ cd Olamundo ou cd mac_webapi 
    
    # Resturar as dependencia
    $ dotnet restore 
    
    # Rode o projeto
    $ dotnet run

```
---
## 💡 Insight

É muito bom utilizar .Net! Diferente de outras framework que já utilizei ela economiza tempo na criação do projeto por já ter seus componentes e na resolução de bugs, pois nela é possível criar um projeto com pouquissimas linhas de comando e além de avisar o erro ela informa sugestões ou até como resolver, enfim, apenas amei e diria que deveria ter conhecido antes(rsrs). Pra quem quer aprender .Net como eu, recomendo o canal do [Marcoratti](https://www.youtube.com/channel/UCoqYHkQy8q5nEMv1gkcZgSw) em que devo os créditos desse repositório.

Segue a baixo um exemplo de alerta de erro do .Net:

```
A compatible installed .NET Core SDK for global.json version [1.0.0-rc4-004771] from [C:\Projetos\aspncore-demo\mac_webapi\global.json] was not found
Install the [1.0.0-rc4-004771] .NET Core SDK or update [C:\Projetos\aspncore-demo\mac_webapi\global.json] with an installed .NET Core SDK:
  3.1.302 [C:\Program Files\dotnet\sdk]
```
---

Desenvolvido ❤️ 
