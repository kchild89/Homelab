# Recovery checklist

The lab is currently offline. This is a planning checklist, not a tested runbook. No restore or startup steps have been performed as part of this repository cleanup.

## Before starting services

- [ ] Inventory the physical hardware, disks, and cable connections.
- [ ] Identify existing configurations and backups before reinstalling or overwriting anything.
- [ ] Verify the actual network layout; treat the historical OPNsense diagram as unconfirmed.
- [ ] Identify which devices provide routing and DNS, and how to reach management interfaces if either is unavailable.

## Bring the previous setup back gradually

- [ ] Check the hypervisor installation, storage health, and existing VM/container inventory.
- [ ] Determine service dependencies and choose a startup order based on the verified configuration.
- [ ] Restore or start one service at a time, checking its function before continuing.
- [ ] Record each service's host, storage, configuration, backup, and verification date in the service inventory.
- [ ] Confirm that important configurations and data can be restored from backups.
- [ ] Update the README and showcase status only after the running state is verified.

## Then revisit future plans

Choose the next service based on a concrete need. Record its dependencies and recovery procedure before treating it as part of the established setup.
