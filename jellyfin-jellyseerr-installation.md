
# Jellyfin and Jellyseerr Installation via Automated Script

Big thanks to `chayman654`, `godver3`, and me :D lol

## 🚀 Initial Setup

Start by running this command in your terminal:

```bash
sudo curl -sO https://raw.githubusercontent.com/delete2020/cli_debrid-setup-/main/setup.sh && \
sudo chmod +x setup.sh && \
sudo ./setup.sh
```

## 🛠 Script Walkthrough

1. **Choose Option 1** – Install new setup  
2. **Choose Option 1 again** – CLI-based  
3. Follow through the purple windows for kernel upgrades and service restarts (use `Tab` key and select `<OK>`).

The script will:
- Download and unpack required files.
- Prompt for your **Real-Debrid API key**.  
  Find it under "My devices" on the Real-Debrid website.

Example API Key:  
`DKB32Y52PH3WIELOLLOLSHOYZEZZ24NMYLVLOLASFSCVDLOLGNNA`

4. **Choose Dev version**
5. Select **Jellyfin** as your media server.
6. Select **Jellyseerr** as media request manager.
7. Choose torrent indexer, Docker manager, auto updates, etc.
8. Set update schedule (e.g., daily), and choose containers to auto-update.
9. Decide if you want Discord notifications (enter webhook if Yes).
10. **Zurg Warning**: Select **No** for Zurg updates.
11. Leave IP and Timezone fields blank (defaults are fine).
12. The script will pull Docker images and finish setup.

## 📦 Deploy in Portainer

- Open Portainer: `http://<your-server-ip>:9443`
- Create an admin user.
- Navigate: `Stacks → + Add Stack`
- Name your stack and paste the configuration from the script.
- Scroll down and hit **Deploy Stack**.

Check if the Zurg folder has content:

```bash
cd /mnt/zurg/movies
ls
```

If empty, add content manually before proceeding.

## ♻️ Restart Script (if interrupted)

```bash
sudo curl -sO https://raw.githubusercontent.com/delete2020/cli_debrid-setup-/main/setup.sh && \
sudo chmod +x setup.sh && \
sudo ./setup.sh
```

Select Option **5** – Check / Repair Installation  
Say **Yes** to the Debrid key prompt.

Ignore initial errors, the script will auto-recover and continue.

## 🔧 Jellyseerr Fix for Config Persistence

```bash
mkdir -p /home/$(whoami)/jellyseerr-config
```

- Kill the stack in Portainer.
- Edit the stack YAML: Update the `jellyseerr` volume path accordingly.
- Deploy again and confirm error is gone.

## 👤 Jellyfin Initial Setup

Access via: `http://<your-server-ip>:8096`  
- Complete the setup wizard.
- Create Admin user.
- Skip library setup for now.

## 🔗 Connect Jellyseerr to Jellyfin

Access Jellyseerr: `http://<your-server-ip>:5055`

- Go to **Configure Jellyfin**
- Fill:
  - Jellyfin URL
  - Admin username & password
- Copy and save the **API Key**

## 📋 CLI Web UI Setup (Port 5000)

- Access: `http://<your-server-ip>:5000`
- Enable **Phalanx**
- Login: `admin / admin`
- Configure:
  - File collection: **symlinked / local**
  - Real-Debrid API key
  - Trakt client ID & secret

Authorize Trakt via: [https://trakt.tv/activate](https://trakt.tv/activate)

## 🔍 Add Scraper

- Select **Torrentio** (even if Jackett selected earlier)
- Click **Add Scraper**
- Configure resolution settings (e.g., split 1080p and 4K)
- Add Jellyseerr as content source using URL and API key
- Skip extras and **Finish Setup**

## 🔗 Helpful Links

- [Overseerr Webhooks](https://github.com/godver3/cli_debrid/wiki/Webhooks#overseerr)
- [Zurg Webhooks](https://github.com/godver3/cli_debrid/wiki/Webhooks#zurg)
- [GitHub](https://github.com/godver3/cli_debrid)
- [Wiki](https://github.com/godver3/cli_debrid/wiki)
- [Discord](https://discord.gg/ynqnXGJ4hU)

## ⚙️ Final CLI Settings

- Go to **System Settings > Version Settings**
- For 1080p: change resolution filter from `==` to `<=`
- Add Jellyfin URL + Token under **Debug Tab**
- Toggle **Organize by Resolution**
- Click **Start Program**

## 🎬 Test Scraping

- Add 1080p & 4K movies and TV shows
- Check **Main → Queue** and **Home**
- Verify files in your server’s symlink folders

## 📚 Add Libraries to Jellyfin

- Go to: `http://<your-server-ip>:8096/web/#/dashboard`
- Libraries → Add Media Library
- Create for:
  - 1080p Movies: `/mnt/symlinked/1080p/Movies`
  - 4K Movies: `/mnt/symlinked/uhd/Movies`
  - 1080p TV: `/mnt/symlinked/1080p/TV`
  - 4K TV: `/mnt/symlinked/uhd/TV`

## ✅ Jellyseerr Setup

- Visit: `http://<your-server-ip>:5055/setup`
- Choose Jellyfin
- Sign in
- Select your libraries
- Skip extra integrations and **Finish Setup**
- Adjust user settings for auto approvals, etc.

## 🧩 Add Jackett Scraper

- Visit: `http://<your-server-ip>:9117`
- Set admin password
- Enter FlareSolverr API: `http://<your-server-ip>:8191`
- Add indexers (e.g., 1337x)
- Copy Jackett API Key

Back to CLI UI:
- Go to: `Settings → Scrapers → Add New`
- Select **Jackett**, input API Key & URL
- Enable it

## 💾 Backup Your Setup

```bash
sudo curl -sO https://raw.githubusercontent.com/delete2020/cli_debrid-setup-/main/setup.sh && \
sudo chmod +x setup.sh && \
sudo ./setup.sh
```

Choose Option **3** – You’ll get a `.tar.gz` backup of your config.
