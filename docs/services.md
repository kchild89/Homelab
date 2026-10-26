# Service inventory

**All lab services are offline as of October 25, 2026.** “Previous setup” means listed in the recent README, not verified to be installed or recoverable today.

| Service | Classification | Intended role | Host / recovery information |
| --- | --- | --- | --- |
| Proxmox VE | Previous setup; offline | Hypervisor | Older diagram names CWWK 8505; verify installation and disks |
| Jellyfin | Previous setup; offline | Media server | Guest/container, media location, and backup unknown |
| Glances | Previous setup; offline | System monitoring | Host and configuration unknown |
| Pi-hole | Previous setup; offline | DNS filtering | Older diagram names Raspberry Pi 5; verify |
| OPNsense | Historical note; unverified and offline | Firewall/router | Older diagram describes a Proxmox VM; not confirmed in the recent README |
| Docker | Future plan | Container hosting | Not yet documented |
| Portainer | Future plan | Docker management | Not yet documented |
| Uptime Kuma | Future plan | Uptime monitoring | Not yet documented |
| Tailscale | Future plan | Remote access | Not yet documented |
| TrueNAS SCALE | Future plan | Storage management | Not yet documented |
| Cybersecurity lab | Future plan | Isolated practice VMs | Network isolation and guest layout not yet documented |

## Record these details as each service is verified

- Host and VM/container identifier, where applicable
- Installed version and deployment method
- Storage and configuration locations
- Network/storage dependencies and startup order
- Backup location, last successful backup, and restore procedure
- Last verification date and what was actually tested

Keep passwords, tokens, and other private recovery details in a separate secure location. See the [recovery checklist](recovery.md) for the initial bring-up sequence.
