# Homelab Network Diagram (Proxmox + OPNsense)

```
[Google Router]
        |
     (Ethernet cable to rack)
        |
 [Port 1 - WAN passthrough to OPNsense VM (on Proxmox, CWWK 8505)]
        |
 [Port 2 - LAN bridge from OPNsense VM to Switch]
        |
    [Unmanaged Switch (e.g. TL-SG108-M2)]
        ├── Port 1: Proxmox Host (Jellyfin, Docker, etc.)
        ├── Raspberry Pi 5 (Pi-hole)
        ├── Phillips Hue Bridge
        ├── Laptop
        ├── Desktop
        └── Other LAN devices (future expansion)
```

## Notes

- **OPNsense** is running as a VM on Proxmox.
- **Port 1** on the CWWK motherboard is dedicated to the WAN (Google Router).
- **Port 2** is bridged to the LAN and connected to the unmanaged switch.
- **Proxmox Host** is connected directly to Port 1 on the switch.
- All devices behind the switch are routed and filtered through OPNsense.
