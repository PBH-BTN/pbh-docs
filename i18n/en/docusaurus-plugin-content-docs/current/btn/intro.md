---
sidebar_position: 1
---

# What is BTN

Before we dive into BTN, let's review the development of anti-leech technologies.

## Development of Anti-Leech Technologies

### Initial Stage

Initially, people used blacklist strategies based on PeerID and ClientName to prevent specific types of clients from connecting to downloaders for leeching. While this strategy was simple and effective, it relied on the premise that downloaders wouldn't disguise these identifiers. Once successfully disguised, the strategy became ineffective.

### Traffic Monitoring Stage

Subsequently, downloaders like BitComet introduced traffic monitoring mechanisms. If a Peer did not send any data pieces to the downloader within a period of time, it was considered leeching behavior and banned. However, for leechers in IP address ranges starting with 101., they circumvented this monitoring by sending minimal upload traffic. Meanwhile, this strategy was ineffective for seeders.

### Algorithm-Based Anti-Leeching Stage

LibTorrent introduced a tit-for-tat anti-leech algorithm. If a Peer was unwilling to provide data pieces, its priority in LibTorrent would gradually decrease until data transmission completely stopped. Similar to traffic monitoring, minimal uploads were sufficient to bypass detection, and it had no impact on seeders.

### Heuristic Detection Stage

PeerBanHelper proposed heuristic detection algorithms (such as Progress Cheat Blocker/PCB) that could effectively detect cheating behaviors like progress rollback and excessive downloading. However, this algorithm responded slowly - by the time detection was triggered, leechers had already downloaded large amounts of data. Therefore, despite significant effectiveness, its efficiency was low and mainly used to minimize losses.

## Response Strategy

Facing these challenges, shared IP rules emerged. Initially, people passed high-risk IP segments through word-of-mouth, but as leechers frequently changed IPs, this approach had limited timeliness. Thus, a data analysis and IP banning technology that could respond quickly was needed.

## Birth of BTN

BTN (full name BitTorrent Threat Network) consists of BTN servers and BTN clients, exchanging data through the [BTN Protocol](https://github.com/PBH-BTN/BTN-Spec).

After BTN clients discover abnormal Peers through methods like PCB, they periodically report to the server via the BTN protocol. The server collects data from numerous clients, generates abnormal IP lists, and distributes them to different clients through the BTN protocol, thereby blocking leechers before their behavior occurs.

## BTN Functions

### Collecting and Analyzing Ban Reports

BTN receives ban reports submitted by clients. If an IP (or IP segment) is banned by multiple people, it's considered a high-risk IP address. BTN will automatically ban the IP and notify other clients to synchronize the ban.

### Preventing Distributed Leeching

Some leechers adopt a distributed strategy, downloading the same file from different users. From a single user's perspective, the leecher downloads the file only once, but in reality, the total data downloaded far exceeds the file size. BTN detects distributed leeching behavior by analyzing the total download volume of each IP (or IP segment) on each torrent and automatically bans them.

### Discovering New Clients

During data submission, BTN checks for new clients and records the first appearance and last seen times. This helps infer the activity time range of malicious leechers. For example, in August 2024, BTN helped us discover a leeching client using random PeerIDs.

### Preventing PeerBanHelper Bypass

In addition to banning data, BTN clients also periodically capture real-time status snapshots of downloaders. This helps detect whether malicious leechers are bypassing existing detections through new methods.

## BTN Service Capabilities

BTN servers provide multiple capabilities that PeerBanHelper clients can interact with to achieve better protection:

### BTN IP Query Service
The BTN IP Query Service allows PeerBanHelper to query the BTN server for more information about specific IP addresses. PeerBanHelper functional modules can use the capabilities provided by this service to obtain activity summaries of specific IP addresses on BTN.

### Reconfiguration Capability
The "Reconfiguration" capability allows the BTN server to notify PeerBanHelper to contact the BTN server after a certain interval to refresh the configuration file used, in order to obtain configuration changes from the remote server.

### Heartbeat Update
This capability allows the BTN network to request PeerBanHelper to send a heartbeat request to the BTN server at regular intervals to update its status on the BTN network. Sometimes this function is also used to detect your available IP addresses to update records on the BTN network. This depends on server requirements.

### Submit Ban List
The "Submit Ban List" capability allows the BTN server to periodically receive PeerBanHelper's ban list and data snapshots at the time of banning. This data helps the BTN server analyze malicious behavior on the network and dynamically generate anti-leech rules to block this malicious behavior.

### Cloud Rules
The "Cloud Rules" capability allows the BTN server to periodically provide anti-leech rules generated by the remote server to PeerBanHelper as a supplement to local anti-leech rules.

### Submit Swarm Tracking Data
"Submit Swarm Tracking Data" is the successor to "Submit History Records" and "Submit Snapshot Data". The new "Submit Swarm Tracking Data" tracks, stores, and submits Peers data in a more server-friendly format to reduce the data aggregation and analysis pressure on BTN servers. This capability allows the BTN server to periodically receive Peers activities and last recorded activity data snapshots from downloaders tracked by PeerBanHelper. This data helps the BTN server analyze malicious behavior on the network and dynamically generate anti-leech rules to block this malicious behavior. At the same time, this data also helps analyze whether there are vulnerabilities in PeerBanHelper's anti-leech functionality that could be exploited in the wild to bypass anti-leech mechanisms.

### IP Reject List
The IP reject list capability allows remote servers to distribute lists of IP/CIDR addresses that need to be intercepted. Connections from addresses in this list will be immediately banned by PeerBanHelper.

## Privacy and Security

To implement the above functions, BTN must collect and upload large amounts of data. All types of uploaded data can be found in the [BTN Protocol Specification](https://github.com/PBH-BTN/BTN-Spec).

Special Note: When uploading data, we do not include the torrent's info_hash and name, but instead use torrent_identifier and torrent size generated by irreversible hashing. This way, we cannot know the content of the torrents you submit (we don't care anyway), and only focus on whether they are the same or different torrents.

If you do not wish to provide data, BTN clients typically offer submission control options. After turning off this option, you can still receive rules but won't upload data.

Always remember: Only connect to BTN servers you trust.