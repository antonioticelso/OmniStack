# Instalação e configuração de ambiemte #
https://www.cyberciti.biz/faq/upgrade-ubuntu-18-04-to-20-04-lts-using-command-line/

sudo apt update && sudo apt upgrade comman /
sudo reboot command /
sudo apt install update-manager-core /
sudo do-release-upgrade /
sudo reboot /
sudo dpkg --configure -a /
sudo ubuntu-drivers autoinstall

## VsCode ##
sudo apt install code

## Java ##
sudo add-apt-repository 'ppa:webupd8team/java'
sudo apt update

## Intellij ##
sudo snap install intellij-idea-ultimate --classic

## JDK8 ##
sudo add-apt-repository ppa:webupd8team/java

## Eclipse ##
https://www.eclipse.org/downloads/

## Maven ##
### Arquivos compactados ###
--> Descompactando
tar -zxvf apache-maven-3.6.3-bin.tar.gz /
tar -Jxxvf node-v12.16.1-linux-x64.tar.xz /

--> Movendo pastas
sudo mv <nomeArquivo> apache-maven-3.6.3/ /opt/

--> Variável de ambiente MVN
export PATH=/usr/local/apache-maven-3.x.y/bin:$PATH

sudo apt install maven

## MAVEN 3.6.3 ##
sudo apt-get update /
sudo apt-get install default-jdk /
sudo update-alternatives --config java

There is only one alternative in link group java (providing /usr/bin/java): /usr/lib/jvm/java-11-openjdk-amd64/bin/java
Nothing to configure.

vi /etc/profile.d/java.sh

#/bin/bash
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

reboot

env | grep JAVA_HOME

JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

java -version

openjdk version "11.0.4" 2019-07-16
OpenJDK Runtime Environment (build 11.0.4+11-post-Ubuntu-1ubuntu219.04)
OpenJDK 64-Bit Server VM (build 11.0.4+11-post-Ubuntu-1ubuntu219.04, mixed mode, sharing)

mkdir /downloads
cd /downloads
wget http://mirror.nbtelecom.com.br/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz

cd /downloads
tar -zxvf apache-maven-3.6.3-bin.tar.gz -C /opt/
ln -s /opt/apache-maven-3.6.3 /opt/maven

vi /etc/profile.d/maven.sh

#/bin/bash
export M2_HOME=/opt/maven
export MAVEN_HOME=/opt/maven
export PATH=/opt/maven/bin:${PATH}

reboot

env | grep -E "JAVA_HOME|M2_HOME|MAVEN|PATH"

JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
M2_HOME=/opt/maven
MAVEN_HOME=/opt/maven
PATH=/opt/maven/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin

mvn -version

Apache Maven 3.6.2 (40f52333136460af0dc0d7232c0dc0bcf0d9e117; 2019-08-27T15:06:16Z)

Maven home: /opt/maven
Java version: 11.0.4, vendor: Ubuntu, runtime: /usr/lib/jvm/java-11-openjdk-amd64
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "5.0.0-31-generic", arch: "amd64", family: "unix"

## Snap ##
sudo apt install snapd

## Intellij ##
sudo snap install intellij-idea-ultimate --classic

## NodeJs ##
sudo npm install -g n (versão estável) /
sudo npm install -g stable /
sudo npm install -g npm /
sudo apt update /
sudo apt install nodejs;
##### Update #####
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
##### Remover #####
sudo apt remove nodejs (removendo o node)


## NPM ##
sudo apt install npm
##### Update #####
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
##### Remover #####
sudo apt remove npm (removendo a npm);


## Git ##
sudo apt install git /
git config --global http.sslVerify "false"

## Gitk ##
sudo apt install gitk

## Postgresql ##
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo -u postgres psql -c "SELECT version();"

#### Alterar senha do Postgresql ####
sudo passwd postgres
su postgres
psql -c "ALTER USER postgres WITH PASSWORD 'nova_senha'" -d template1

## LibreOffice ##
sudo add-apt-repository ppa:libreoffice/ppa
sudo apt update
sudo apt install libreoffice

## NPM ##
sudo apt install npm

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

export HTTP_PROXY=http://<USUARIO>:<SENHA>@localhost:40080
export HTTPS_PROXY=http://<USUARIO>:<SENHA>@localhost:40080

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt update \
sudo apt install docker-ce \
sudo groupadd docker \
sudo usermod -aG docker $USER

#### Docker ####
sudo dockerd --debug \
sudo update-ca-certificates \
sudo service docker restart \
sudo systemctl status docker \
sudo systemctl daemon-reload \

mkdir /etc/docker/certs.d

mkdir -p  /etc/docker/certs.d/atf.intranet.bb.com.br:5001

mkdir ~/Downloads/certificado

cd ~/Downloads/certificado

openssl genrsa -out client.key 4096
openssl req -new -x509 -text -key client.key -out client.cert
cp client.key /etc/docker/certs.d/atf.intranet.bb.com.br:5001/client.key
cp client.cert /etc/docker/certs.d/atf.intranet.bb.com.br:5001/client.cert

openssl req \
  -newkey rsa:4096 -nodes -sha256 -keyout domain.key \
  -x509 -days 365 -out domain.crt
cp domain.crt /etc/docker/certs.d/atf.intranet.bb.com.br:5001/ca.crt

cp ~/Downloads/certificado/domain.crt /usr/local/share/ca-certificates/mydomain.com.crt
sudo update-ca-certificates \
sudo service docker restart \
sudo systemctl daemon-reload \

Pra apagar redes e imagens
    sudo rm -r /var/lib/docker/network

Pra zerar as redes
    docker system prune


## SisBB ##
https://www.vivaolinux.com.br/dica/Instalar-o-emulador-de-Telnet-PW3270

sudo sh -c "echo 'deb http://download.opensuse.org/repositories/home:/PerryWerneck:/pw3270/xUbuntu_19.10/ /' > /etc/apt/sources.list.d/home:PerryWerneck:pw3270.list"

wget -nv https://download.opensuse.org/repositories/home:PerryWerneck:pw3270/xUbuntu_19.10/Release.key -O Release.key

sudo apt-key add - < Release.key

sudo apt-get update \
sudo apt-get install pw3270

## Comandos do Projeto Docker ##
docker stop <nome da imagem>

docker system prune <finaliza todos os processos docker>

docker-compose up <inicializa o serviços de banco>

mvn clean package <rodar da app>


## Comandos Quarkus ##
http://localhost:8088/hello/
http://localhost:8088/swagger-ui/

mvn quarkus:add-extensions -Dextensions="openapi"
mvn quarkus:add-extensions -Dextensions="orm-panache"
mvn quarkus:add-extensions -Dextensions="jdbc-mysql"
mvn quarkus:add-extensions -Dextensions="resteasy-jsonb"
mvn quarkus:add-extensions -Dextensions="health"

docker run --network host -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=teste -d --rm mysql:8.0.19


## Comandos do Projeto OmniStack ##
sudo su <root> /
mkdir <nome da nova pasta> /
npm init -y /
npm install express /
node index.js <inicialização do backend e banco para o localhost e suas rotas>
npx create-react-app <nome da app> /
npm start /
npm install nodemon -D <framework para restart de banco de dados on-line>
npm install knex <gerenciador de banco de dados>
npm install sqlite3 <banco de dados utilizado>
npx knex init /
npx knex migrate:make <nome da create_ongs>
npx knex migrate:make create_incidents /
npx knex migrate:latest <executa a criação da table>
npx knex migrate:rollback <desfaz o ultimo migrate ou criação>
npx knex migrate:list <lista as ultimas execuções ou criações>

                