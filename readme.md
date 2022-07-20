# Kernel guide for Linux

This guide shows how to create a Discord setup with Kernel, Goosemod, OpenAsar, Powercord, BetterDiscord and Cumcord.

## Step 1 | Install Prerequisites

You will need a recent [**node.js**](https://nodejs.org/) version, with [**pnpm**](https://pnpm.io) installed, regardless of the way you install Kernel.
To do that, after installing it open a terminal and run:

- open terminal and run this:
```sh
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

## Step 2 | Install [Discord Development](https://discord.com/)

- [Download](https://discordapp.com/api/download/development?platform=linux) Discord Development

## Step 3 | Install [Kernel](https://github.com/kernel-mod/installer-cli)

- Download the latest [kernal-installer](https://github.com/kernel-mod/installer-cli/releases/latest).

- Create a folder you would like to use for kernel's plugins and place the installer there 

- By default the folder discord has its resources, is owned by the root user. Run this to make it accessable to the current user   
```sh
sudo chown -R $USER: /usr/share/discord-development/resources
```

- Now, run this to install kernel (replace anything with {} as needed)
```sh
./kernel-install-{cpu type}-linux -i /usr/share/discord-development/resources -k {path to the folder u made for kernel}
```

## Step 4 | Install [GooseMod](https://github.com/GooseMod/GooseMod)

- navigate to ``~/.config/discorddevelopment``

- There should be a [settings.json](https://i.imgur.com/duc2for.png), add the following lines after the first line of the contents (below the ``{``):

```json
"UPDATE_ENDPOINT": "https://updates.goosemod.com/goosemod",
"NEW_UPDATE_ENDPOINT": "https://updates.goosemod.com/goosemod/",
```

- Restart Discord by quitting via the system tray icon, then opening it again.   
<sub>if this causes connection issues, use [this](https://github.com/WmeLuna/Discord-Kernel-Linux-Guide/raw/master/honkloader.plugin.js) plugin to inject goosemod through bd-compat</sub>
## Step 5 | Install [OpenAsar](https://github.com/GooseMod/OpenAsar)

- [Download](https://github.com/GooseMod/OpenAsar/releases/download/nightly/app.asar) the latest version of OpenAsar

- navigate to ``/usr/share/discord-development/resources``

- Backup your original app-original.asar (rename to app-original.asar.backup / etc)

- Install OpenAsar app.asar into the original path and rename it to ``app-original.asar``

- Restart Discord via system tray (you can check your [version](https://i.imgur.com/H3oPsaT.png) info in settings to see if OpenAsar is installed)

## Step 6 | Install packages

- navigate to your kernel folder and open it with your terminal, navigate to the packages folder and clone these packages:

**Discord Utilities:**
```sh
git clone https://github.com/slow/discord-utilities
```

**Webpack:**
```sh
git clone https://github.com/strencher-kernel/webpack
```
**settings:**
```sh
git clone https://github.com/strencher-kernel/settings
```

**no-sentry:**
```sh
git clone https://github.com/strencher-kernel/no-sentry
```

**pc-compat:**
```sh
git clone https://github.com/strencher-kernel/pc-compat
cd pc-compat
pnpm initialize
```

**bd-compat:**
```sh
git clone https://github.com/strencher-kernel/bd-compat
```

**CumcordLoader:**
##### Use powercord's packages to install this one (will be created in your kernel folder after a launch with pc-compat)
```sh
git clone https://github.com/CumcordLoaders/Powercord
```

## Step 7 | Settings

- change the [GooseMod Settings](https://i.imgur.com/2Dn8dQw.png),
  - disable the changelog
  - disable the divider
  - disable store in Home

- Go to the [plugin settings](https://i.imgur.com/TymDxyQ.png) of Cumcord and add this url and click on ``Add Plugin``:
```
https://cumcordplugins.github.io/Condom/yellowsink.github.io/cc-plugins/cumstain/
```

- You can add some custom CSS to reorder the settings menus. For this setup I use this css code, you can use it via the Custom CSS from GooseMod:

<details>
<summary>Click to show the CSS code.</summary>

```css
/* No Icons */
.bd-logo, .pc-logo {
  display: none !important;
}

/* Remove Separator */
.separator-2wx7h6 {
  display: none;
}

/* Remove Nitro Icon */
.premiumLabel-3HPvdB svg {
  display: none;
}

/* Remove Logout Icon */
[aria-controls="logout-tab"] svg {
  display: none;
}

/* Discord */
.item-3XjbnG.themed-2-lozF[aria-controls="changelog-tab"] {
  overflow: visible !important;
  margin-top: 42.5px;
}

.item-3XjbnG.themed-2-lozF[aria-controls="changelog-tab"]::after {
  content: "Discord";
  position: absolute;
  top: -35px;
  left: 10px;
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-display);
  line-height: 16px;
  text-transform: uppercase;
  color: var(--channels-default);
  width: 90%;
  border-top: 0px var(--background-modifier-accent) solid;
  padding-top: 14px;
  pointer-events: none;
}

/* Powercord */
.item-3XjbnG.themed-2-lozF[aria-controls="pc-modulemanager-plugins-tab"] {
  overflow: visible !important;
  margin-top: 42.5px;
}

.item-3XjbnG.themed-2-lozF[aria-controls="pc-modulemanager-plugins-tab"]::after {
  content: "Powercord";
  position: absolute;
  top: -35px;
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-display);
  line-height: 16px;
  text-transform: uppercase;
  color: var(--channels-default);
  width: 90%;
  border-top: 0px var(--background-modifier-accent) solid;
  padding-top: 14px;
  pointer-events: none;
}

/* Better Discord */
.item-3XjbnG.themed-2-lozF[aria-controls="settings-tab"] {
  overflow: visible !important;
  margin-top: 42.5px;
}

.item-3XjbnG.themed-2-lozF[aria-controls="settings-tab"]::after {
  content: "BetterDiscord";
  position: absolute;
  top: -35px;
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-display);
  line-height: 16px;
  text-transform: uppercase;
  color: var(--channels-default);
  width: 90%;
  border-top: 0px var(--background-modifier-accent) solid;
  padding-top: 14px;
  pointer-events: none;
}

/* Dev */
.item-3XjbnG.themed-2-lozF[aria-controls="experiments-tab"] {
  overflow: visible !important;
  margin-top: 42.5px;
}

.item-3XjbnG.themed-2-lozF[aria-controls="experiments-tab"]::after {
  content: "Dev";
  position: absolute;
  top: -35px;
  left: 10px;
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-display);
  line-height: 16px;
  text-transform: uppercase;
  color: var(--channels-default);
  width: 90%;
  border-top: 0px var(--background-modifier-accent) solid;
  padding-top: 14px;
  pointer-events: none;
}

/* Order */
[aria-controls="hypesquad-online-tab"] {
  order: -1;
}

[aria-controls="changelog-tab"] {
  order: -2;
}

[aria-controls="experiments-tab"],
[aria-controls="developer-options-tab"],
[aria-controls="hotspot-options-tab"],
[aria-controls="dismissible-content-options-tab"],
[aria-controls="payment-flow-modals-tab"] {
  order: 1;
}

[aria-controls="logout-tab"] {
  order: 2;
}

.info-3pQQBb {
  order: 3;
}

.socialLinks-3ywLUf {
  order: 4;
}

/* Spacing */
[aria-controls="pc-updater-tab"],
[aria-controls="payment-flow-modals-tab"],
[aria-controls="hypesquad-online-tab"],
[aria-controls="friend-requests-tab"],
[aria-controls="billing-tab"],
[aria-controls="advanced-tab"],
[aria-controls="overlay-tab"],
[aria-controls="ysink_stain-tab"],
[aria-controls="gm-snippets-tab"] {
  overflow: visible !important;
  margin-bottom: 16px !important;
}


[aria-controls="logout-tab"] {
  overflow: visible !important;
  margin-top: 32px !important;
}

[aria-controls="logout-tab"] {
  background: var(--background-primary);
}
```
</details>

![image](https://user-images.githubusercontent.com/58918358/178970815-71454187-35ce-41db-80f5-c652301455af.png)   
