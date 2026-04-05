/**
 * Defines the structure of a service item.
 */
export interface ServiceItem {
  id: number;
  name: string;
}

export class Service {
  private services: ServiceItem[] = [
    { id: 1, name: 'Password Reset' },
    { id: 2, name: 'Spyware Removal' },
    { id: 3, name: 'RAM Upgrade' },
    { id: 4, name: 'Software Installation' },
    { id: 5, name: 'Tune-up' },
    { id: 6, name: 'Keyboard Cleaning' }
  ];

  /**
   * Returns all services.
   */
  getServices(): ServiceItem[] {
    return this.services;
  }

  /**
   * Finds a service by its ID.
   * @param id The service ID
   * @returns The matching ServiceItem
   * @throws Error if the service is not found
   */
  getService(id: number): ServiceItem {
    console.log('getService called with id:', id);

    const service = this.services.find(s => s.id === id);

    if (!service) {
      throw new Error(`Service with id ${id} not found`);
    }

    return service;
  }
}
