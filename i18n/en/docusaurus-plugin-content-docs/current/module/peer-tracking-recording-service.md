# Peer Tracking Recording Service

This service provides data support for modules that require this functionality by recording peer connection session information, data transmission information, status information, etc.

Disabling this feature will stop data collection and processing, and modules that depend on this service may stop working and report incorrect or empty data.

Modules that currently require this service:

* BTN Legacy Protocol (BTNv1 Protocol) cross-swarm online analysis
* Status -> Current Status -> Malicious:Normal connection ratio
* Status -> Current Status -> Peer session tracking count
* Data Perspective -> Torrents -> Access history
* Data Perspective -> IP Query -> Access history
* Statistics -> Charts -> Peer ID
* Statistics -> Charts -> Location and ISP
* Statistics -> Charts -> Trends