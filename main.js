<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AZ10 Minecraft Server Website Page</title>

    <style>
        body {
            font-family: 'Segoe UI', Tahoma, sans-serif;
            background-color: #1a1a1a;
            color: white;
            text-align: center;
            padding: 50px 10px;
            margin: 0;
        }

        h1 { font-size: 2.5rem; margin-bottom: 10px; color: #ffffff; }

        #status-box {
            margin: 10px auto 30px auto;
            background: #2a2a2a;
            padding: 10px 20px;
            display: inline-block;
            border-radius: 4px;
            border: 1px solid #444;
            font-size: 1.1rem;
        }

        .btn-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }

        .btn {
            display: inline-block;
            padding: 15px 30px;
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 18px;
            border: 2px solid #000;
            cursor: pointer;
            width: 250px;
            transition: transform 0.05s;
        }

        .mc-btn {
            background-color: #388e3c;
            box-shadow: inset -4px -4px 0px 0px #1b5e20, inset 4px 4px 0px 0px #a5d6a7;
        }

        .discord-btn {
            background-color: #5865F2;
            box-shadow: inset -4px -4px 0px 0px #3c45a5, inset 4px 4px 0px 0px #8ea1ff;
        }

        .copy-btn {
            background-color: #444;
            box-shadow: inset -4px -4px 0px 0px #222, inset 4px 4px 0px 0px #666;
            font-size: 14px;
        }

        .btn:active {
            transform: translateY(4px);
            box-shadow: none;
        }

        .rules-container {
            background: #222;
            max-width: 400px;
            margin: 40px auto;
            padding: 20px;
            border: 1px solid #444;
            text-align: left;
            border-radius: 8px;
        }

        .rules-container h2 { color: #ffaa00; margin-top: 0; text-align: center; font-size: 1.5rem; }
        .rules-list { list-style: none; padding: 0; }
        .rules-list li { margin-bottom: 12px; padding-left: 10px; border-left: 4px solid #d1180f; }

        .rules-container h3 { color: #c5dade; margin-top: 0; text-align: center; font-size: 1.5rem; }

        .rules-container h4 { color: #c7d455; margin-top: 0; text-align: center; font-size: 1.5rem; }
        .rules-list { list-style: none; padding: 0; }
        .rules-list li { margin-bottom: 12px; padding-left: 10px; border-left: 4px solid #aed4af; }

        .rules-container h5 { color: #8502e8; margin-top: 0; text-align: center; font-size: 1.5rem; }
        .rules-list { list-style: none; padding: 0; }
        .rules-list li { margin-bottom: 12px; padding-left: 10px; border-left: 4px solid #e8cd02; }

        .footer-version { margin-top: 20px; color: #888; font-size: 0.8rem; }

        /* CSS to hide the iOS help by default */
        #ios-notice {
            display: none;
            background: rgba(255, 170, 0, 0.1);
            border: 1px dashed #ffaa00;
            padding: 15px;
            margin: 20px auto;
            max-width: 400px;
            border-radius: 8px;
        }
    </style>
</head>
<body>

    <h1>AZ10 Minecraft Bedrock Server</h1>

    <div id="status-box">
        Server Status: <span id="status">Checking...</span>
    </div>

    <div id="ios-notice">
        <h3 style="color: #ffaa00; margin-top:0;">📱 iOS / iPhone Tip</h3>
        <p style="font-size: 0.85rem;">If the green button fails, please add the IP manually below!</p>
    </div>
    <div class="btn-group">
        <button onclick="launchMinecraft()" class="btn mc-btn">
            Add Server To Minecraft
        </button>

        <a href="https://discord.gg/6G3ZbJHgXq" target="_blank" class="btn discord-btn">
            Join Our Discord Server
        </a>

        <button onclick="copyIP()" class="btn copy-btn">
            📋 Copy Server IP
        </button>
    </div>

    <div class="rules-container" style="border-left: 4px solid #5865F2;">
        <h2 style="color: #5865F2;">🎮 Console Players</h2>
        <p style="font-size: 0.9rem; line-height: 1.4;">
            Download <b>"Bedrock Together"</b> on your phone. Enter the IP, click "Run", then check the <b>"Friends Tab"</b> on your console!
        </p>
    </div>

    <div class="rules-container" style="border-left: 4px solid #36b34a;">
        <h2 style="color: #36b34a;">📜 Server Rules & Fair Play</h2>
        <p style="font-size: 0.9rem; line-height: 1.4;">
            Using hacks, mods, exploits, or any unfair advantages is STRICTLY PROHIBITED.
        </p>
    </div>

    <div class="rules-container">
        <h2>This includes (but is not limited to)</h2>
        <ul class="rules-list">
            <li>❌ X-ray</li>
            <li>❌ Fly</li>
            <li>❌ Kill Aura</li>
            <li>❌ Duping</li>
            <li>❌ Any client-side cheats</li>
        </ul>
    </div>

    <div class="rules-container">
        <h3>⚠️ Violations will result in punishment (warn / kick / ban depending on severity).</h3>
    </div>

    <div class="rules-container" style="border-left: 4px solid #32c0d9;">
        <h2 style="color: #36b34a;">📝 Reporting Players</h2>
        <p style="font-size: 0.9rem; line-height: 1.4;">
            If you encounter a rule breaker, report them immediately in the <a href="https://discord.com/channels/1455561469390491731/1455573147850903552">reports-📝</a> ⁠ channel.
        </p>
    </div>

    <div class="rules-container">
        <h4>Please include</h4>
        <ul class="rules-list">
            <li>• Player IGN</li>
            <li>• What happened</li>
            <li>• Proof (screenshots or video)</li>
        </ul>
    </div>

    <div class="rules-container">
        <h5>📌 Important</h5>
        <ul class="rules-list">
            <li>Make sure all required details are included before submitting a report.</li>
            <li>✨ Play fair. Have fun. Respect everyone. ✨</li>
        </ul>
    </div>

    <div class="footer-version">Minecraft Bedrock: 1.26.0</div>
    <div class="footer-version">Website Version: 0.9 (if you find any bug or issue, do not hesitate to create <a href="https://github.com/Cabbagetic-2-0/Server-AZ10/issues/new">New issue</a>)</div>

    <script>
    const ip = "az10.joinmc.playit.plus";
    const port = "27042";
    const name = "AZ10 Bedrock Server";

    // Detect iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
        document.getElementById('ios-notice').style.display = 'block';
    }

    // Function to Join
    function launchMinecraft() {
        const deepLink = `minecraft://?addExternalServer=${encodeURIComponent(name)}%7C${ip}:${port}`;
        window.location.href = deepLink;
    }

    // NEW: Function to Copy IP (This was missing!)
    function copyIP() {
        const fullIP = ip + ":" + port;
        navigator.clipboard.writeText(fullIP).then(() => {
            alert("IP Copied: " + fullIP);
        }).catch(() => {
            alert("Manual copy: " + fullIP);
        });
    }

    // Status Checker
    async function checkStatus() {
        try {
            const response = await fetch(`https://api.mcstatus.io/v2/status/bedrock/${ip}:${port}`);
            const data = await response.json();
            const statusElement = document.getElementById('status');

            if (data.online) {
                statusElement.innerText = "ONLINE (" + data.players.online + ")";
                statusElement.style.color = "#55ff55";
            } else {
                statusElement.innerText = "OFFLINE";
                statusElement.style.color = "#ff5555";
            }
        } catch (e) {
            document.getElementById('status').innerText = "ERROR";
        }
    }
    checkStatus();
    </script>
</body>
</html>
