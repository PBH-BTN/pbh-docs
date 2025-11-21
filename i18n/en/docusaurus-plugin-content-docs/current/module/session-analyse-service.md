# Session Statistics and Analysis Service

This service provides data support for modules that require this functionality by recording basic peer metadata and aggregating statistical data.

Disabling this feature will stop data collection and processing, and modules that depend on this service may stop working and report incorrect or empty data.

Modules that currently require this service:

* Status -> Current Status -> Peer session tracking count
* Statistics -> Charts -> IP statistics