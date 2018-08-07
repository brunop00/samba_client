echo "Updating apt"
sudo apt-get -y update > /dev/null

echo "Installing Samba Server"
sudo apt-get -y install samba
sudo cp /var/www/html/install/smb.conf /etc/samba/smb.conf
sudo service smbd restart
sudo service nmbd restart

echo "Vagrant finish"