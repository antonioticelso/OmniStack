# Instalação e configuração de ambiemte #
## VsCode ##
sudo apt install code

## JDK8 ##
sudo add-apt-repository ppa:webupd8team/java

## Eclipse ##
https://www.eclipse.org/downloads/

## Maven##
### Arquivos compactados ###
sudo apt-get --only-upgrade install maven

--> Descompactando
tar -zxvf apache-maven-3.6.3-bin.tar.gz
tar -Jxxvf node-v12.16.1-linux-x64.tar.xz

--> Movendo pastas
sudo mv <nomeArquivo> apache-maven-3.6.3/ /opt/

cd ~/Downloads
wget http://apache.mirrors.timporter.net/maven/maven-3/3.1.1/binaries/apache-maven-3.1.1-bin.tar.gz

sudo mkdir -p /usr/local/apache-maven
sudo mv apache-maven-3.1.1-bin.tar.gz /usr/local/apache-maven
cd /usr/local/apache-maven
sudo tar -xzvf apache-maven-3.1.1-bin.tar.gz

--> Variável de ambiente MVN
export PATH=/usr/local/apache-maven-3.x.y/bin:$PATH

export M2_HOME=/usr/local/apache-maven/apache-maven-3.1.1
export M2=$M2_HOME/bin
export MAVEN_OPTS="-Xms256m -Xmx512m"
export PATH=$M2:$PATH

sudo apt install maven

## NodeJs ##
sudo apt install nodejs

## Git ##
sudo apt install git

## Gitk ##
sudo apt install gitk

## NPM ##
sudo apt install npm

## Gitk ##
sudo apt install gitk

## VPN ##
sudo apt install openvpn network-manager-openvpn-gnome openvpn-systemd-resolved

## Docker ##
sudo apt-get remove docker docker-engine docker.io
sudo apt update

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

export HTTP_PROXY=http://c1314151:89562312@localhost:40080
export HTTPS_PROXY=http://c1314151:89562312@localhost:40080

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt update
sudo apt install docker-ce   
sudo groupadd docker
sudo usermod -aG docker $USER


## SisBB ##
https://www.vivaolinux.com.br/dica/Instalar-o-emulador-de-Telnet-PW3270

sudo sh -c "echo 'deb http://download.opensuse.org/repositories/home:/PerryWerneck:/pw3270/xUbuntu_19.10/ /' > /etc/apt/sources.list.d/home:PerryWerneck:pw3270.list"
wget -nv https://download.opensuse.org/repositories/home:PerryWerneck:pw3270/xUbuntu_19.10/Release.key -O Release.key
sudo apt-key add - < Release.key
sudo apt-get update
sudo apt-get install pw3270


## Comandos do Projeto Docker ##
docker stop <nome da imagem>
docker system prune <finaliza todos os processos docker>
docker-compose up <inicializa o serviços de banco>
mvn clean package <rodar da app>


## Comandos do Projeto OmniStack ##
sudo su <root>
mkdir <nome da nova pasta>
npm init -y
npm install express
node index.js <inicialização do backend e banco para o localhost e suas rotas>
npx create-react-app <nome da app>
npm start
npm install nodemon -D <framework para restart de banco de dados on-line>
npm install knex <gerenciador de banco de dados>
npm install sqlite3 <banco de dados utilizado>
npx knex init
npx knex migrate:make <nome da create_ongs>
npx knex migrate:make create_incidents
npx knex migrate:latest <executa a criação da table>
npx knex migrate:rollback <desfaz o ultimo migrate ou criação>
npx knex migrate:list <lista as ultimas execuções ou criações>


## Comandos do Projeto DemoQuarkus ##
mvn quarkus:dev
./mvnw package -Dnative -Dquarkus.native.container-build=true


