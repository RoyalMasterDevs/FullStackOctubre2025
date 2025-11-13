### 🐧 Comandos Linux Y otros más...

```bash
pwd              # Muestra el directorio actual
ls               # Lista archivos y carpetas
ls -la           # Lista detallada incluyendo ocultos
lscpu            # Información del procesador y sus núcleos
cd <dir>         # Cambia de directorio
mkdir <dir>      # Crea una carpeta
touch <archivo>  # Crea un archivo vacío
cp <origen> <dest>    # Copiar archivos o carpetas
mv <origen> <dest>    # Mover o renombrar
rm <archivo>     # Eliminar archivos
rm -r <carpeta>  # Eliminar carpeta y su contenido
cat <archivo>    # Ver contenido de archivo
nano <archivo>   # Editor básico de terminal
echo "Hola"      # Muestra texto
clear            # Limpia la pantalla
whoami           # Usuario actual
exit             # Salir del terminal
man <comando>    # Manual del comando
history          # Ver historial de comandos

ps -ef | grep start
ps -ef | grep scpoadm
# Muestran los procesos que están corriendo en el servidor

cat, less, head, tail  # Leer archivos
chmod +x script.sh     # Dar permisos de ejecución
chown user:group file  # Cambiar propietario
top, htop, ps aux      # Procesos
uptime, who, w         # Info del sistema y usuarios
grep "texto" archivo    # Buscar texto
find /ruta -name "*.txt"  # Buscar por nombre
tar -czvf archivo.tar.gz carpeta/    # Comprimir
tar -xzvf archivo.tar.gz             # Descomprimir
df -h                  # Uso del disco
du -sh *               # Tamaño de carpetas
ps aux                 # Ver procesos
kill <PID>             # Matar proceso
top / htop             # Monitor de sistema
wget <url>             # Descargar archivos
curl <url>             # Hacer peticiones HTTP

# MONITOREO y LOGGING
top / htop            # Procesos y recursos
vmstat, iostat        # Estadísticas del sistema
journalctl            # Logs de sistema
tail -f /var/log/syslog
df -h, free -m        # Disco y RAM
ps -fp $(pgrep -f start)  # Muestra todos los procesos que contengan "start".
ps -ef | grep '[f]irefox' # Busca por nombre el proceso.
nohup ./startNodePoolManager.sh Basic > /dev/null 2>&1 &
# Arranca el nodepool sin "pegarlo" a la terminal

# SERVICIOS (systemd)
sudo systemctl start <servicio>      # Iniciar servicio
sudo systemctl stop <servicio>       # Detener servicio
sudo systemctl restart <servicio>    # Reiniciar servicio
sudo systemctl status <servicio>     # Estado del servicio
sudo systemctl enable <servicio>     # Activar en el arranque
sudo systemctl disable <servicio>    # Desactivar del arranque
sudo systemctl list-units --type=service   # Ver servicios

# GESTIÓN DE PAQUETES

# --- Debian / Ubuntu (APT) ---
sudo apt update
sudo apt upgrade
sudo apt install <paquete>
sudo apt remove <paquete>
sudo apt purge <paquete>
sudo apt autoremove
dpkg -i <archivo.deb>

# --- RedHat / Fedora / CentOS ---
sudo dnf update
sudo dnf install <paquete>
sudo dnf remove <paquete>
sudo dnf info <paquete>
sudo yum install <paquete>   # Alternativa a dnf en sistemas antiguos
sudo rpm -ivh <archivo.rpm>
sudo rpm -qa

# --- Arch Linux / Manjaro (pacman) ---
sudo pacman -Syu
sudo pacman -S <paquete>
sudo pacman -R <paquete>
sudo pacman -Rns <paquete>
sudo pacman -Ss <nombre>
sudo pacman -Qi <paquete>
sudo pacman -Qs <texto>
sudo pacman -Qe

# COMANDOS NETWORKING
ip link                                 # Muestra las interfaces
ip addr                                 # Muestra las IP's
ip addr add <ip> dev eth0               # Agrega IP
route                                   # Tabla de rutas
ip route add <ip final>/<ip inicio>     # Agrega ruta
ip route add default via <ip inicio>    # Ruta por defecto

# Gestores de Paquetes, Debian, Fedora, Arch
apt install <pkg>
dnf remove <pkg>
pacman -Syu

# --- Flatpak ---
flatpak install flathub <paquete>
flatpak run <paquete>
flatpak uninstall <paquete>

# --- Snap ---
sudo snap install <paquete>
sudo snap remove <paquete>
snap list

# --- Homebrew en Linux ---
brew install <paquete>
brew list
brew update && brew upgrade

# --- DOCKER ---
docker ps -a
docker images
docker run -d -p 80:80 nginx
docker exec -it <id> bash
docker logs -f <id>
docker build -t nombre .
docker-compose up -d
docker-compose down

# --- KUBERNETES(K8s) Essentials ---
kubectl get pods, svc, deployments
kubectl describe pod <name>
kubectl logs <pod>
kubectl exec -it <pod> -- bash
kubectl apply -f archivo.yaml
kubectl delete -f archivo.yaml

# --- RED Y SEGURIDAD ---
ping <host>
curl -I <url>
wget <url>
netstat -tulnp
ss -tuln
traceroute <host>
nmap <ip>
ufw enable/allow/deny
iptables
ssh user@host
scp archivo user@host:/dest

# --- GIT Y CONTROL DE VERSIONES ---
git init / clone <repo>
git status / git diff
git add . && git commit -m "msg"
git push / git pull
git checkout -b nueva-rama
git merge main
git stash / git log

# --- AUTOMATIZACIÓN (CI/CD, scripting) ---
bash script.sh
crontab -e
ansible all -m ping -i inventario
ansible-playbook playbook.yml

# --- Infraestructura como Código (IaC) ---
terraform init
terraform plan
terraform apply
terraform destroy

# --- Ansible ---
ansible-inventory --list
ansible-playbook -i hosts playbook.yml

# --- Virtualización y Cloud CLI ---

# --- AWS CLI ---
aws configure
aws s3 ls
aws ec2 describe-instances

# --- Azure CLI ---
az login
az vm list

# --- GCP CLI ---
gcloud init
gcloud compute instances list

# --- OTROS ---
alias gs="git status"
env
export VAR=value
which <cmd>
xargs, sed, awk
