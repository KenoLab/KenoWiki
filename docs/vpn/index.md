# Connecting to the lab

Lab machines are only reachable through the Kenolab VPN (WireGuard).

## 1. Download your profile

- **Discord:** run `/vpn` and Kenobot sends you your WireGuard configuration file.
- **Web:** download it from your profile on [www.kenolab.eu](https://www.kenolab.eu).

Rename it to `kenolab.conf`, since `wg-quick` uses the file name as the interface name.

::: warning
The profile contains your private key. Don't share it.
:::

## 2. Install WireGuard

::: code-group

```bash [Debian / Ubuntu]
sudo apt install wireguard
```

```bash [Arch]
sudo pacman -S wireguard-tools
```

```bash [Fedora]
sudo dnf install wireguard-tools
```

```text [Windows / macOS]
Install the WireGuard app from wireguard.com, then "Import tunnel(s) from file".
```

:::

## 3. Connect / disconnect

```bash
sudo wg-quick up ./kenolab.conf     # connect
sudo wg-quick down ./kenolab.conf   # disconnect
```

To use it by name, move it to `/etc/wireguard/`:

```bash
sudo mv kenolab.conf /etc/wireguard/
sudo chmod 600 /etc/wireguard/kenolab.conf

sudo wg-quick up kenolab
sudo wg-quick down kenolab
```

## 4. Check it works

```bash
sudo wg show kenolab   # a recent "latest handshake" means you're connected
ip a show kenolab      # your VPN address
```

## Troubleshooting

- **No profile found:** contact an administrator. Your config may not be generated yet.
- **No handshake:** check that nothing blocks outbound UDP on your network.
- **`resolvconf: command not found`** on `wg-quick up`: install `openresolv` (or `systemd-resolvconf`), or remove the `DNS =` line from the config.
- **Connected but can't reach machines:** make sure your lab instance is deployed.
