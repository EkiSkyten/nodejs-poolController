
//  nodejs-poolController.  An application to control pool equipment.
//  Copyright (C) 2016, 2017, 2018, 2019.  Russell Goldin, tagyoureit.  russ.goldin@gmail.com
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU Affero General Public License as
//  published by the Free Software Foundation, either version 3 of the
//  License, or (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU Affero General Public License for more details.
//
//  You should have received a copy of the GNU Affero General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.

// Time and Date
import { settings, logger, time } from '../../../../etc/internal';


export function process ( data: number[], counter: number )
{
    let logConfigMessages = settings.get( 'logConfigMessages' )
    //                         2   3    4 5  6   7   8   9  10 11 12 13 14 15
    //example packet  165	16	16	34	133	8	21	31	64	11	3	 17	 0	0	 2	7

    //Following packet (time) also is broadcast in #2, as is adjust DST...
    time.updateDateTime( data[ 6 ], data[ 7 ], data[ 8 ], data[ 9 ], data[ 10 ], data[ 11 ], data[ 13 ] )
    //hh, mm, day of week, day, month, year, autoadjustDST

    if ( logConfigMessages )
    {
        logger.silly( 'Msg# %s  Date/Time packet data: %s  currentHeat: %s', counter, data );
    }


    var decoded = true;

    return decoded
}