import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  partidas = [
    {
      numero: 1,
      id: 'eTxkUsdq',
      blancas: 'Bastanzo, Jorge Raúl',
      negras: '?, Carlos',
      resultado: '1 - 0'
    },
    {
      numero: 2,
      id: 'I9vNgDWK',
      blancas: 'Bastanzo, Jorge Raúl',
      negras: '?, ?',
      resultado: '1 - 0'
    },
    {
      numero: 3,
      id: 'G7khXdo1',
      blancas: 'Jovana Rapport (2318)',
      negras: 'Anna Muzychuk (2550)',
      resultado: '0 - 1'
    },
    {
      numero: 4,
      id: 'boRsWv2G',
      blancas: 'Alexander Morozevich (2675)',
      negras: 'Yifan Hou (2666)',
      resultado: '0 - 1'
    },
    {
      numero: 5,
      id: '5rLwYKya',
      blancas: 'desso2b (1510)',
      negras: 'nazarenobastanzo (1525)',
      resultado: '0 - 1'
    },
    {
      numero: 6,
      id: 'qJwKnkI0',
      blancas: 'nazarenobastanzo (1525)',
      negras: 'Hamidi1986 (1495)',
      resultado: '1 - 0'
    },
    {
      numero: 7,
      id: 'rL7HEVkE',
      blancas: 'nazarenobastanzo (1512)',
      negras: 'plenitude (1571)',
      resultado: '1 - 0'
    },
    {
      numero: 8,
      id: 'rU1xHVew',
      blancas: 'Hikaru Nakamura (2792)',
      negras: 'Garry Kasparov (2812)',
      resultado: '1/2 - 1/2'
    },
    {
      numero: 9,
      id: 'UAhU9WT3',
      blancas: 'Garry Kasparov (2812)',
      negras: 'Leinier Dominguez Perez (2739)',
      resultado: '1/2 - 1/2'
    },
    {
      numero: 10,
      id: '827VbzLL',
      blancas: 'Garry Kasparov (2812)',
      negras: 'Sergey Karjakin (2773)',
      resultado: '1/2 - 1/2'
    },
    {
      numero: 11,
      id: 'bkeICn1S',
      blancas: 'Johann Hjartarson',
      negras: 'Garry Kasparov',
      resultado: '0 - 1'
    },
    {
      numero: 12,
      id: 'IJ7k9YCf',
      blancas: 'Garry Kasparov',
      negras: 'Johann Hjartarson',
      resultado: '1 - 0'
    },
    {
      numero: 13,
      id: 'hUF7fjAR',
      blancas: 'Anatoly Karpov',
      negras: 'Garry Kasparov',
      resultado: '0 - 1'
    },
    {
      numero: 14,
      id: 'buSOL1rw',
      blancas: 'david-artiles (1495)',
      negras: 'nazarenobastanzo (1487)',
      resultado: '0 - 1'
    },
    {
      numero: 15,
      id: 'IEx4qn2Q',
      blancas: 'szurtos (1897)',
      negras: 'nazarenobastanzo (1689)',
      resultado: '0 - 1'
    },
    {
      numero: 16,
      id: 'mlbrTDQc',
      blancas: 'hyderho (1601)',
      negras: 'nazarenobastanzo (1691)',
      resultado: '0 - 1'
    },
    {
      numero: 17,
      id: 'gZf9CGqX',
      blancas: 'jbastanzo (1760)',
      negras: 'MirekVeverka (1654)',
      resultado: '1 - 0'
    },
    {
      numero: 18,
      id: 'CKQngJKQ',
      blancas: 'OliverOnion (1465)',
      negras: 'nazarenobastanzo (1700)',
      resultado: '0 - 1'
    },
    {
      numero: 19,
      id: 'fjDjaeTd',
      blancas: 'nazarenobastanzo (1705)',
      negras: 'Spillpants (1941)',
      resultado: '1 - 0'
    },
    {
      numero: 20,
      id: '',
      blancas: '',
      negras: '',
      resultado: ''
    },
    {
      numero: 21,
      id: 'liApJ93Y',
      blancas: 'AfolabiS (1547)',
      negras: 'nazarenobastanzo (1629)',
      resultado: '0 - 1'
    },
    {
      numero: 22,
      id: 'LELPJrhO',
      blancas: 'nazarenobastanzo (1576)',
      negras: 'TinasheEr (1747)',
      resultado: '1 - 0'
    },
    {
      numero: 23,
      id: 'iaw7Q4wC',
      blancas: 'Adams, Michael (2505)',
      negras: 'Psakhis, Lev (2565)',
      resultado: '1 - 0'
    },
    {
      numero: 24,
      id: '',
      blancas: '',
      negras: '',
      resultado: ''
    },
    {
      numero: 25,
      id: 'mzfDjPHD',
      blancas: 'Adams, Mi (2740)',
      negras: 'Psakhis, Lev (2545)',
      resultado: '1 - 0'
    },
    {
      numero: 26,
      id: '',
      blancas: '',
      negras: '',
      resultado: ''
    },
    {
      numero: 27,
      id: '1dPNMKmG',
      blancas: 'Adams, Mi (2740)',
      negras: 'Adams, Mi (2740)',
      resultado: '1/2 - 1/2'
    },
    {
      numero: 28,
      id: 'b6n0Rv8p',
      blancas: 'Psakhis, Lev (2545)',
      negras: 'Adams, Mi (2740)',
      resultado: '0 - 1'
    },
    {
      numero: 29,
      id: 'RKby7zHD',
      blancas: 'Akopian, Vladimir (2460)',
      negras: 'Psakhis, Lev (2550)',
      resultado: '0 - 1'
    },
    {
      numero: 30,
      id: 'uXl7Oxu2',
      blancas: 'nazarenobastanzo (1743)',
      negras: 'Franiol (1718)',
      resultado: '1 - 0'
    },
    {
      numero: 31,
      id: 'dZuVMgN5',
      blancas: 'nazarenobastanzo (1760)',
      negras: 'gambit09 (1516)',
      resultado: '1 - 0'
    },
    {
      numero: 32,
      id: 'LjLzxSmI',
      blancas: 'Sergey Karjakin (2757)',
      negras: 'Andrey Esipenko (2438)',
      resultado: '0 - 1'
    },
    {
      numero: 33,
      id: 'JkJuHZFi',
      blancas: 'carevchess (1566)',
      negras: 'nazarenobastanzo (1560)',
      resultado: '0 - 1'
    }
  ];
  constructor() { }
}
