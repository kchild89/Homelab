# Historical Homelab Network Diagram (Proxmox + OPNsense)

> **Offline / unverified:** As of October 25, 2026, the entire lab is offline. This older diagram is retained as a reference, not a confirmed current topology. The recent service list does not confirm OPNsense, and Docker is a future plan. Verify hardware, cabling, bridges, and routing before using this layout.

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

## Original design notes (unverified)

- **OPNsense** was described as a VM on Proxmox; its installation is unverified.
- **Port 1** on the CWWK motherboard was designated for the WAN (Google Router).
- **Port 2** was intended to be bridged to the LAN and connected to the unmanaged switch.
- **Proxmox Host** was shown connected directly to Port 1 on the switch.
- The design intended all devices behind the switch to route through OPNsense. This is not verified current behavior.
