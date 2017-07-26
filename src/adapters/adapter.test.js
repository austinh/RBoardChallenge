import processedEvents from './adapter';

describe('it parses the API information to filtered arrays',()=>{
  it('it returns an object with relevant keys', () => {
    expect(Object.keys(processedEvents)).toEqual(['final','live','scheduled']);
  });

  it('it pushes the right objects to their corresponding arrays', () => {
    expect(processedEvents.final[0].competitions[0].status.description).toEqual("FINAL");
    expect(processedEvents.live[0].competitions[0].status.description).toEqual("IN PROGRESS");
    expect(processedEvents.scheduled[0].competitions[0].status.description).toEqual("SCHEDULED");
  });

});
