# Windows

## EcoQoS Throttling (Windows 11 22H2+)

In Windows 11 version 22H2 or higher, if the system BIOS and CPU support it, PeerBanHelper will enable [EcoQoS](https://devblogs.microsoft.com/performance-diagnostics/introducing-ecoqos/) power-saving optimizations.
This mitigates the sudden power draw caused by CPU turbo boost during each detection due to burst computation, and lowers PBH’s priority, giving more system resources to other programs.

On older versions of Windows or platforms, this feature will only lower its own process priority.

On other operating systems it will do nothing.

When EcoQoS is successfully enabled, a leaf icon will appear on the PBH GUI window:

![EcoQoS](./assets/ecoqos.png)

To disable this system feature, edit the following in `config.yml`:

```yaml
performance:
  # Enable EcoQoS API on Windows Platform for power saving, for exchange, the program performance will reduce and cronjobs may delay
  # Enable EcoQoS API on Windows Platform for power saving, for exchange, the program performance will reduce and cronjobs may delay
  # https://devblogs.microsoft.com/performance-diagnostics/introducing-ecoqos/
  windows-ecoqos-api: true
```