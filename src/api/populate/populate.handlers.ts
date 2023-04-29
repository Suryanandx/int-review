import { Request, Response, NextFunction } from 'express';
import { Populate, PopulateWithId, Populates } from './populate.model';

export async function fetchDataFromApi(req: Request, res: Response<Populate[]>, next: NextFunction) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const jsonData = await response.json();
    const insertedResult = await Populates.insertMany(jsonData);

    if (!insertedResult.acknowledged) throw new Error('Error in inserting document');
    res.status(201);
    console.log(insertedResult);
  } catch (error) {
    next(error);
  }
} 


export async function searchDataFromApi(req: Request, res: Response<PopulateWithId>, next: NextFunction) {
  try {
    var query = <any>{};

    if (req.params.name) {
      query.name = req.params.name;
    }

    if (req.params.body) {
      query.body = req.params.body;
    }

    if (req.params.email) {
      query.email = req.params.email;
    }
    const result = await Populates.find(query).toArray();
    res.status(201);
    console.log(result);
  
  } catch (error) {
    next(error);
  }
}