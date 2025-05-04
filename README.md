
# Jellyfin & Jellyseerr Installation Guide

> **Automated Setup Script for Jellyfin, Jellyseerr, and CLI Debrid System**

Big thanks to `chayman654`, `godver3`, and me :D lol

---

## 📦 Prerequisites

- Ubuntu 20.04+ (or any compatible Debian-based system)
- sudo privileges
- Internet access

---

## 🚀 One-Line Install Command

```bash
sudo curl -sO https://raw.githubusercontent.com/delete2020/cli_debrid-setup-/main/setup.sh && \
sudo chmod +x setup.sh && \
sudo ./setup.sh
```

---

## 🛠 Script Options

1. **Install New Setup** → **CLI-Based**
2. Follow prompts:
   - Kernel upgrade prompts (`<OK>` using `Tab`)
   - Input your **Real-Debrid API key**
   - Choose:
     - **Dev version**
     - **Jellyfin** as Media Server
     - **Jellyseerr** as Request Manager
     - Enable Docker manager & auto-updates
     - (Optional) Discord webhook
     - Skip Zurg update
3. Default IP & timezone settings are fine.

---

## 🔧 Post-Install Setup

### Access Portainer

- URL: `http://<your-server-ip>:9443`
- Navigate: `Stacks → + Add Stack → Paste YAML → Deploy`

### Jellyseerr Volume Fix (if needed)

```bash
mkdir -p /home/$(whoami)/jellyseerr-config
```

- Update volume paths in the stack YAML
- Redeploy

---

## 🧠 Initial Configuration

### Jellyfin Setup

- URL: `http://<your-server-ip>:8096`
- Create admin user
- Skip library setup for now

### Jellyseerr Setup

- URL: `http://<your-server-ip>:5055`
- Go to **Settings → Configure Jellyfin**
- Input:
  - Jellyfin URL
  - Admin credentials
  - Save the API Key

---

## 🖥 CLI Web UI (Port 5000)

- URL: `http://<your-server-ip>:5000`
- Enable **Phalanx**, login: `admin / admin`
- Input:
  - Real-Debrid API Key
  - Trakt Client ID/Secret ([Trakt Activate](https://trakt.tv/activate))
- Choose Scraper: **Torrentio**
- Add Jellyseerr as content source
- Configure resolution filters
- Finish setup

---

## 📁 Add Media Libraries to Jellyfin

Jellyfin dashboard → Libraries → Add:

- `/mnt/symlinked/1080p/Movies`
- `/mnt/symlinked/uhd/Movies`
- `/mnt/symlinked/1080p/TV`
- `/mnt/symlinked/uhd/TV`

---

## 🧩 Jackett Integration

- URL: `http://<your-server-ip>:9117`
- Add indexers
- Set FlareSolverr URL: `http://<your-server-ip>:8191`
- Copy API key

Add in CLI UI:

- `Settings → Scrapers → Add New → Jackett`

---

## 🧪 Test & Finalize

- Add a few 1080p / 4K movies or shows
- Check CLI UI: **Main → Queue** and **Home**
- Confirm downloads & folder population

---

## 💾 Backup Instructions

Run setup script again:

```bash
sudo curl -sO https://raw.githubusercontent.com/delete2020/cli_debrid-setup-/main/setup.sh && \
sudo chmod +x setup.sh && \
sudo ./setup.sh
```

Choose option **3 – Backup Configuration**

---

## 🔗 Useful Resources

- [GitHub](https://github.com/godver3/cli_debrid)
- [Wiki](https://github.com/godver3/cli_debrid/wiki)
- [Overseerr Webhooks](https://github.com/godver3/cli_debrid/wiki/Webhooks#overseerr)
- [Zurg Webhooks](https://github.com/godver3/cli_debrid/wiki/Webhooks#zurg)
- [Discord Support](https://discord.gg/ynqnXGJ4hU)

---

## ✅ Final Tips

- Change resolution filters (`==` to `<=`) in **System Settings → Version Settings**
- Enable **Organize by Resolution**
- Add Jellyfin Token under **Debug Settings**
- Hit **Start Program** in CLI UI

Enjoy your fully automated media setup!
