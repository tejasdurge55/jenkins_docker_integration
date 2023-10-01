# dice_game

root@f3eb0fca1bf6:/# history
    1  apt-get update
    2  apt-get -y install apt-transport-https ca-certificates curl gnupg2 software-properties-common
    3  sudo install -m 0755 -d /etc/apt/keyrings01~
    4  install -m 0755 -d /etc/apt/keyrings
    5  install -m 0755 -d /etc/apt/keyrings
    6  curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    7  curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    8  chmod a+r /etc/apt/keyrings/docker.gpg
    9  echo "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] 
https://download.docker.com/linux/debian "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
   10  sudo apt-get update
   11  apt-get update
   12  apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
   13  docker run hello-world
   14  docker ps
   15  docker version
   16  ls
   17  exit
   18  history
root@f3eb0fca1bf6:/#
