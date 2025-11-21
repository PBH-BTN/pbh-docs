# Active Monitoring

Some of the statistical features provided by PBH require this module to be enabled.  
When active monitoring is enabled, PBH will store and update all Peers data obtained during each scan of the downloader into the database to provide visual statistics and traffic alert services.

## Features Supported by This Function

* Traffic statistics charts
* Trend charts
* Non-blocked part of the GeoIP charts

## Configure Traffic Alerts

Go to Settings -> Preferences, scroll down to find "Active Monitoring," enable traffic alerts, and configure the daily traffic alert threshold.

![traffic-capping](./assets/active-monitoring.png)

After configuring, click the "Save" button at the bottom of the page to apply the changes.

## Configure Traffic Limiting

Go to Settings -> Preferences, scroll down to find "Active Monitoring", enable traffic limiting and configure daily traffic limits.

After enabling traffic limiting, you need to keep PeerBanHelper running continuously and ensure your downloader supports traffic data statistics. Once enabled, PeerBanHelper will dynamically adjust the downloader's speed limits between the maximum and minimum upload speed limits you've set, based on the upload traffic over the past 24 hours, ultimately controlling it near the specified total upload amount.

![traffic-limit](./assets/trafficlimit.png)