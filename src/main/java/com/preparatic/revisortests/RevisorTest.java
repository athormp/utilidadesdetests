/*******************************************************************************
 * Copyright (c) 2013, 2016 Preparatic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
package com.preparatic.revisortests;

import java.io.IOException;
import java.util.ArrayList;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.preparatic.csvreaders.FicheroExcel;
import com.preparatic.csvreaders.IExcel;
import com.preparatic.entidades.PreguntaTest;

class RevisorTest {

	private static Logger logger = LogManager.getLogger(RevisorTest.class);
	
	public static void main(String[] args) throws IOException {
		
		logger.info("Corrección de tests en excel y su exportación a MySQL.");
		
		IExcel ficheroExcel = new FicheroExcel();
		GestorConsultas gestorConsultas = new GestorConsultas();

		// Abrimos el excel
		ficheroExcel.abrirExcel();

		// Obtenemos todas las preguntas del excel
		ArrayList<PreguntaTest> listaPreguntas = ficheroExcel.getListaPreguntas();
		
// Descomentar para depurar con salidas por pantalla.
//		Iterator<PreguntaTest> it = listaPreguntas.iterator();
//		PrintWriter writer = new PrintWriter("20151006_tests_nuevos_cpg.txt", "UTF-8");
//		
//		while (it.hasNext()){
//			PreguntaTest pt = it.next();
//			writer.println(pt.toString());
//		}
//		writer.close();

		// Ejecutamos las sentencias
		gestorConsultas.ejecutarSentencias(listaPreguntas);
		
		// Visualizamos las estadísticas
		GestorEstadisticas.obtenerInforme();	

		int i = 0;
		System.out.println(i);

	}

}
