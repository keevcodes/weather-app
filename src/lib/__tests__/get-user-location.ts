import { getUserLocationCoordinates } from "@/lib/get-user-location";

describe("getUserLocationCoordinates", () => {
  const mockIp = "192.168.1.1";

  it("should return coordinates from client.city if available", async () => {
    const result = await getUserLocationCoordinates(mockIp);

    expect(result).toEqual({
      latitude: -33.3013,
      longitude: 26.5325
    });
  });

  it("should return default coordinates if location is undefined", async () => {
    const result = await getUserLocationCoordinates(mockIp);

    expect(result).toEqual({
      latitude: -33.3013,
      longitude: 26.5325
    });
  });

  it("should return default coordinates if client.city throws an error", async () => {
    const result = await getUserLocationCoordinates(mockIp);

    expect(result).toEqual({
      latitude: -33.3013,
      longitude: 26.5325
    });
  });
});
