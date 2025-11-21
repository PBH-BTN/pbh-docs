# Anti-Vampire for Tasks

The anti-vampire module provides users with functionality to block common problematic clients.

## Presets

### Xunlei (Thunder)

Considering the large number of Xunlei users, this module aims to maintain the tit-for-tat spirit of BitTorrent while enabling effective data transmission between Xunlei and downloader users as much as possible. The specific rule strategy is as follows:

1. If Xunlei is version 0019: Allow Xunlei clients to connect to tasks that are currently downloading on the user's client, but prohibit connections to tasks that the user's client is currently seeding. The reason for this is that Xunlei does not seed on the BT network after download completion, but it will share upload resources with BT network users during the download process.
2. If it is other versions of Xunlei (such as 0012, 0018): Prohibit Xunlei clients from connecting to any tasks on the user's client, because these clients cannot correctly report task progress, and most builds refuse to upload and share resources. This goes against the BitTorrent spirit and has no positive effect on the network.

The descriptions in this module are not set in stone. If Xunlei makes adjustments to uploading in the future, this strategy will be updated accordingly.