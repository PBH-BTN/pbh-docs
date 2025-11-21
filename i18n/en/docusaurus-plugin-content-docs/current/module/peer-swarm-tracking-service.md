# Peer Swarm Tracking Service

This service provides data support for modules that require this functionality by recording peer connection session information. The recorded data is temporary and will be deleted when the program is closed or restarted.

Disabling this feature will stop data collection and processing, and modules that depend on this service may stop working and report incorrect or empty data.

Modules that currently require this service:

* BTN Modern Protocol (BTNv2 Protocol) cross-swarm online analysis