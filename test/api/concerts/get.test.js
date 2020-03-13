const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../../server');
const Concert = require('../../../models/concert.model');

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('GET /api/concerts', () => {
    before(async () => {
        const testConcOne = new Concert({ performer: 'Amanda Cia', genre: 'rock', price: '10', day: 1, image: '/img/uploads/1fsd324fsdg.jpg' });
        await testConcOne.save();
      
        const testConcTwo = new Concert({ performer: 'Joseph Core', genre: 'pop', price: '20', day: 2, image: '/img/uploads/1fsd324fsdg.jpg' });
        await testConcTwo.save();

        const testConcThree = new Concert({ performer: 'Julia Fare', genre: 'pop', price: '30', day: 1, image: '/img/uploads/1fsd324fsdg.jpg' });
        await testConcThree.save();
      });
      
      after(async () => {
        await Concert.deleteMany();
      });


      it('/ should return all concerts', async () => {

        const res = await request(server).get('/api/concerts');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(3);
      
      });

      it('/ should return concerts performed by performer', async () => {

        const res = await request(server).get('/api/concerts/performer/Julia Fare');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(1);
      
      });

      it('/ should return concerts by genre', async () => {

        const res = await request(server).get('/api/concerts/genre/pop');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(2);
      
      });

      it('/ should return concerts by day', async () => {

        const res = await request(server).get('/api/concerts/price/day/1');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(2);
      
      });

      it('/ should return concerts by price', async () => {

        const res = await request(server).get('/api/concerts/price/15/25');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(1);
      
      });
});