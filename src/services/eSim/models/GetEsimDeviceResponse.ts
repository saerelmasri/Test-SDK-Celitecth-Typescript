export interface GetEsimDeviceResponse {
  device?: Device;
}
interface Device {
  /**
   * Name of the OEM
   */
  oem?: string;
  /**
   * Name of the Device
   */
  hardwareName?: string;
  /**
   * Model of the Device
   */
  hardwareModel?: string;
  /**
   * Serial Number of the eSIM
   */
  eid?: string;
}
