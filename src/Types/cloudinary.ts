export type CloudinaryResponseType = {
  resources: ImageResponse[];
};

export type ImageResponse = {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  version: number;
  resource_type: 'image';
  type: string;
  created_at: string; // ISO date string
  uploaded_at: string; // ISO date string
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: 'active'; // Assuming 'active' is the only status, otherwise use string
  access_mode: 'public'; // Assuming 'public' is the only access mode, otherwise use string
  access_control: null; // Type can be updated if other values are possible
  etag: string;
  created_by: null;
  uploaded_by: null;
};
