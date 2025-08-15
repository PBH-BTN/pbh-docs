# Charts

The charts feature in PBH Plus provides visual representations of various statistics related to active peers on your downloader. The interface includes several types of charts:

## Ban Statistics
View ban curves over your selected time range. You can adjust the time interval in the settings.

## Multi-dimensional Pie Charts
Analyze data across three dimensions:
- Number of bans per PeerID
- Seeds with highest IP bans
- Functional modules contributing to bans

## Location and ISP Data
Another multi-dimensional pie chart showing data across four dimensions:
- ISP/AS
- Country/Region
- Province
- City

By default shows only ban-related data, but you can switch to view all session data.

## Traffic Statistics
:::warning
Due to sampling intervals and calculation methods, there may be discrepancies in the data. Please rely on downloader statistics for accuracy.
:::

Shows upload and download traffic curves over your selected time range. Time interval can be adjusted in settings.

## Trends
Shows changes in session access and ban counts over the selected timeframe. Note that a higher number of bans compared to sessions is not an error - a peer is only counted as a session when it connects and generates traffic.

# docs/statistic/ip-query.md
# IP Query

Query information about an IP address from PeerBanHelper's GeoIP data. If you have unlocked PBH Plus, you can also access:

## Access History
With Active Monitoring enabled, records statistics of different torrents visited by the peer on your downloader.

## Ban History
Logs all ban operations associated with this IP address.

You can also use these external IP analysis tools to investigate anomalies and services running on the IP:
- [Censys Search](https://search.censys.io/)
- [Shodan](https://www.shodan.io/)

Note: These tools are not affiliated with PeerBanHelper or PBH-BTN. Information provided by them is not under PeerBanHelper's responsibility.

# docs/statistic/torrents.md
# Seed Query

PeerBanHelper records essential metadata of active torrents, including name, infohash and size, and caches this information in a database. This prevents duplicate entries and optimizes disk space usage.

The seed query module uses this recorded data to display connection and ban status of torrents associated with PeerBanHelper.

Click the button to query records, which will take you to a detailed page showing all access or ban records related to that torrent.

:::tip
If your download client fails and you lose all saved torrents, you can reconstruct magnet links using the recorded hash values to re-download the metadata.
:::